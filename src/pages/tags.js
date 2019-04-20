import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Tag from '../components/common/tag.js';

export default function AllTags({ data }) {
    const { tags } = data.markdownRemark.frontmatter;
    const tagPills = tags.map(i => <Tag key={i} tagName={i} />);
    return (
      <Layout title="All Tags">
        <SEO
          title="All Tags"
          keywords={tags}
        />
        <h1>All Tags:</h1>
        <hr />
        {tagPills}
      </Layout>
    );
}

export const pageQuery = graphql`
query {
    markdownRemark {
    frontmatter {
      tags
    }
  }
}
`;
