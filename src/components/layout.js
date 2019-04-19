import React from 'react';

import styles from './layout.module.less';
import { rhythm } from '../utils/typography';
import BrandedHeader from './BrandedHeader.js';
import BrandedFooter from './BrandedFooter.js';

class Layout extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
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
}

export default Layout;
