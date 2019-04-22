import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Tag from '../components/common/tag.js';

export default function AllTags({ pageContext: { tags } }) {
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
