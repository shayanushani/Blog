import React from 'react';
import { Link } from 'gatsby';
import styles from './BrandedHeader.module.less';
import Logo from '../../content/assets/cargurus-logo.svg';

export default function BrandedHeader() {
  return (
    <nav className={styles.brandedHeader}>
      <Link
        aria-label="CarGurus Logo"
        to="/"
      >
        <Logo />
      </Link>
    </nav>
  );
}
