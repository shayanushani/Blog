import React, { Fragment } from 'react';

import { rhythm } from '../utils/typography';
import BrandedHeader from './BrandedHeader.js';

class Layout extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return (
      <Fragment>
        <nav>
          <BrandedHeader />
        </nav>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
          <footer>
            ©
            {' '}
            {new Date().getFullYear()}
,
            {' '}
            <a href="www.cargurus.com">CarGurus</a>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
