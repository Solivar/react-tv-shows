import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
  return(
    <footer className={styles.container}>
      <p>Made with <a href="http://www.tvmaze.com/api">TVmaze API</a></p>
    </footer>
  );
}

export default Footer;
