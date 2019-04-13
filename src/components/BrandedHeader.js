import React from 'react';
import { Link } from 'gatsby';
import styles from './BrandedHeader.module.less';
import Logo from '../../content/assets/cargurus-logo.svg';

export default function BrandedHeader() {
  return (
    <div className={styles.brandedHeader}>
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to="/"
      >
        <Logo />
      </Link>
    </div>
  );
}
