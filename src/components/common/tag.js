import React from 'react';
import styles from './tag.module.less';

export default function Tag({ tagName }) {
  return <span className={styles.tag}>{tagName}</span>;
}
