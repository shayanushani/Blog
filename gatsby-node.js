const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve('./src/templates/blog-post.js');
  const tagTemplate = path.resolve('./src/templates/tag-template.js');
  const allTagTemplate = path.resolve('./src/templates/all-tags-template.js');
  const FeedTemplate = path.resolve('./src/templates/feed-template.js');
  const postsPerPage = 10;

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;
    let tags = [];
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      tags = tags.concat(post.node.frontmatter.tags);
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
    // only use unique values
    tags = [...new Set(tags)];
    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });
    createPage({
      path: '/tags/',
      component: allTagTemplate,
      context: {
        tags,
      },
    });

    // Blog Feed Page
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_item, index) => {
      createPage({
        path: index === 0 ? '/' : `/page/${index + 1}`,
        component: FeedTemplate,
        context: {
          totalCount: posts.length,
          limit: postsPerPage,
          skip: index * postsPerPage,
          current: index + 1,
        },
      });
    });
    return null;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    if (node.frontmatter && node.frontmatter.tags) {
      // normalize tags to lower kebab case
      // eslint-disable-next-line no-param-reassign
      node.frontmatter.tags = node.frontmatter.tags.map(a => a.replace(/\s/g, '-').toLowerCase());
      const value = createFilePath({ node, getNode });
      createNodeField({
        name: 'slug',
        node,
        value,
      });
    }
  }
};
