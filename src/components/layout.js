import React from 'react';

import styles from './layout.module.less';
import { rhythm } from '../utils/typography';
import BrandedHeader from './BrandedHeader.js';
import BrandedFooter from './BrandedFooter.js';

export default function Layout({ children }) {
  // eslint-disable-next-line react/prop-types
  return (
    <div className={styles.container}>
      <BrandedHeader />
      <div className={styles.mainWrap}>
        <main
          className={styles.main}
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </main>
      </div>
      <BrandedFooter />
    </div>
  );
}
