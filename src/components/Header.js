import React from 'react';
import { Link } from "react-router-dom";

import styles from './Header.module.scss';

const Header = () => {
  return(
    <header className={`font-serif ${styles.container}`}>
      <p className={styles.text}>
        <Link to="/">TV Shows</Link>
      </p>
    </header>
  );
}

export default Header;
