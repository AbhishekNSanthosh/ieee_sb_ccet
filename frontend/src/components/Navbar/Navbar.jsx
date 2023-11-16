import React from 'react'
import styles from './Navbar.module.css'
import blueLogo from '../../assets/ieeeLogo.svg'
import navLink from '../../utils/data'
import {
  Link,
} from "react-router-dom";

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
          {navLink.map((item, index) => (
            <div key={index} className={styles.navbarItemRight}>
              {
                item?.link ?
                  <a href={`#${item?.link}`}>
                    <span className={styles.navLink}>{item?.name}</span>
                  </a>
                  :
                    <span className={styles.navLink}>{item?.name}</span>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar