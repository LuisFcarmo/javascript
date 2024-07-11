import React from 'react';
import styles from './Footer.module.css'; // Importe seu arquivo de estilos

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h3>Escreva sobre o que você tem mais interesse</h3>
      <p>Mini Blog &copy; 2024</p>
    </footer>
  );
};

export default Footer;
