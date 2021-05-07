import React from 'react'

import HeaderImage from './Header.jpg'

import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={HeaderImage} alt="Logo Ordem Normal" height="168" width="300" />
      <h1>FICHA DE PERSONAGEM</h1>
    </div>
  )
}

export default Header