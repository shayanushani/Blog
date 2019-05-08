import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import GitHubIcon from './svg/github.svg';
import TwitterIcon from './svg/twitter.svg';
import styles from './BrandedHeader.module.less';
import Logo from '../../content/assets/cargurus-logo.svg';
import Menu from './Menu';


export default function BrandedHeader() {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className={styles.brandedHeader}>
      <Link
        aria-label="HomePage Link"
        to="/"
      >
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.spacer} />
      <FontAwesomeIcon role="button" onClick={setExpanded} className={styles.hamburger} icon={faBars} size="lg" />
      <Menu onClose={() => setExpanded(false)} isOpen={expanded}>
        <Link to="/tags/">All Tags</Link>
        <a href="/rss.xml">RSS</a>
        <a aria-label="github" href="https://github.com/cargurus/Blog">
          <GitHubIcon />
        </a>
        <a aria-label="twitter" href="https://twitter.com/cargurus/"><TwitterIcon /></a>
      </Menu>
    </nav>
  );
}
