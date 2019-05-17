import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostSummary from '../components/PostSummary';
import Pagination from '../components/Pagination';

const Feed = ({ data, location, pageContext = {} }) => {
  const { totalCount, current = 1, limit } = pageContext;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const renderFeed = posts.map(({ node }) => (
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
      {renderFeed}
      <Pagination
        totalCount={totalCount}
        current={current}
        postsPerPage={limit}
      />
    </Layout>
  );
};

export default Feed;

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
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
