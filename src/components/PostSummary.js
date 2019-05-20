import React from 'react';
import { Link } from 'gatsby';

import styles from './PostSummary.module.less';

export default function PostSummary({ slug, description, title, date }) {
  return (
    <article key={slug}>
      <h3 className={styles.h3Style}>
        <Link style={{ boxShadow: 'none' }} to={slug}>
          {title}
        </Link>
      </h3>
      <time>{date}</time>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <hr className={styles.articleHr} />
    </article>
  );
}
