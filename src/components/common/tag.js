import React from 'react';
import { Link } from 'gatsby';
import styles from './tag.module.less';
import { getTagUrl } from '../../constants/urls.js';

export default function Tag({ tagName }) {
  return <Link to={getTagUrl(tagName)}><span className={styles.tag}>{tagName}</span></Link>;
}
