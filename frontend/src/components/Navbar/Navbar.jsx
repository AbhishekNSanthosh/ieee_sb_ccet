import React from 'react'
import styles from './Navbar.module.css'
import blueLogo from '../../assets/ieeeLogo.svg'
import navLink from '../../utils/data'

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbarLeft}>
          <div className={styles.navbarItem}>
            <img src={blueLogo} alt="" className={styles.logo} />
          </div>
        </div>
        <div className={styles.navbarRight}>
          {navLink.map((link, index) => (
            <div key={index} className={styles.navbarItemRight}>
              <span className={styles.navLink}>{link}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar