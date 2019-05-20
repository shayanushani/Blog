import React from 'react';
import { Link } from 'gatsby';
import styles from './Pagination.module.less';

const next = 'Next Page';
const prev = 'Previous Page';

const Pagination = ({ totalCount, postsPerPage, current = 1 }) => {
  const numPages = Math.ceil(totalCount / postsPerPage);
  const nextPageLink = `/page/${current + 1}`;
  const prevPageLink = current === 2 ? '/' : `/page/${current - 1}`;
  return (
    <div className={styles.pagination}>
      {current > 1 && (
        <Link className={styles.prev} to={prevPageLink}>
          ← {prev}
        </Link>
      )}
      {numPages !== current && (
        <Link className={styles.next} to={nextPageLink}>
          {next} →
        </Link>
      )}
    </div>
  );
};

export default Pagination;
