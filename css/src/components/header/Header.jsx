import React from 'react'
import styles from '../header/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3>Header</h3>
        <button>Login</button>
    </div>
  )
}

export default Header