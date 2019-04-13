import React from 'react';
import styles from './BrandedHeader.module.less';
import Logo from '../../content/assets/cargurus-logo.svg';
export default function() {
    return (
    <div className={styles.brandedHeader}>
        <Logo />
    </div>
    )
}