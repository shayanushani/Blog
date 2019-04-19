import React from 'react';
import { Link } from 'gatsby';
import styles from './BrandedHeader.module.less';
import Logo from '../../content/assets/cargurus-logo.svg';

export default function BrandedHeader() {
  return (
    <nav className={styles.brandedHeader}>
      <Link
        aria-label="Blog Homepage"
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to="/"
      >
        <Logo />
      </Link>
    </nav>
  );
}
