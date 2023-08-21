import styles from './Navbar.module.css'
import React, { lazy } from 'react'
import logoBlue from '../../../assets/IEEE_SB.svg'
import { navData } from '../../../services/ieeeData'
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.navbarLeftCol}>
          <div className={styles.navbarLeftColItemDiv}>
            <img src={logoBlue} alt="" className={styles.navbarLogo} />
          </div>
        </div>
        <div className={styles.navbarRightCol}>
          {navData && navData.map((data, index) => (
            <div className={styles.navbarRightColItemDiv}>
              {data && data.anyLink ?
                <a
                  href={`#${data?.link}`}
                >
                  <h1 className={styles.navbarRightItem}>
                    {data?.item}
                  </h1>
                </a>
                :
                <h1 className={styles.navbarRightItem}>
                  {data?.item}
                </h1>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar