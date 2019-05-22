import React from 'react';
import styles from './BrandedFooter.module.less';

export default function BrandedFooter() {
  return (
    <footer className={styles.footer}>
      ©{new Date().getFullYear()},{' '}
      <a href="https://www.cargurus.com">CarGurus, Inc., All Rights Reserved</a>
    </footer>
  );
}
