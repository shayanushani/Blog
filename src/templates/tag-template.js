import React from 'react';

// Components
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostSummary from '../components/PostSummary';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const siteTitle = `posts tagged with ${tag}`;
  const posts = data.allMarkdownRemark.edges;
  const renderedPost = posts.map(({ node }) => (
    <PostSummary
      title={node.frontmatter.title || node.fields.slug}
      slug={node.fields.slug}
      date={node.frontmatter.date}
      description={node.frontmatter.description || node.excerpt}
    />
  ));
  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} keywords={[siteTitle]} />
      {renderedPost}
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
