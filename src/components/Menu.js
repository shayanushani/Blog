import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import styles from './Menu.module.less';

export default function Menu({ isOpen, children, onClose }) {
  return (
    <div className={clsx({ [styles.menu]: true, [styles.expanded]: isOpen })}>
      <div className={styles.header}>
        <span role="button" className={styles.close}>
          <FontAwesomeIcon size="lg" icon={faTimesCircle} onClick={onClose} />
        </span>
      </div>
      <div className={styles.links}>{children}</div>
    </div>
  );
}
Menu.defaultProps = {
  isOpen: false,
  onClose: () => {},
};
