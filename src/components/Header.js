import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return(
    <header className={`font-serif ${styles.container}`}>
      <p className={styles.text}>
        <a href="/">TV Shows</a>
      </p>
    </header>
  );
}

export default Header;
