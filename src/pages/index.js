import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostSummary from '../components/PostSummary';

export default function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const renderedPost = posts.map(({ node }) => (
    <PostSummary
      key={node.fields.slug}
      title={node.frontmatter.title || node.fields.slug}
      slug={node.fields.slug}
      date={node.frontmatter.date}
      description={node.frontmatter.description || node.excerpt}
    />
  ));
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      {renderedPost}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
