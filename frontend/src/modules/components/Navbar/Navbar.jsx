import styles from './Navbar.module.css'
import React, { lazy, useState } from 'react'
import logoBlue from '../../../assets/IEEE_SB.svg'
import { navData } from '../../../services/ieeeData'
import { Link } from 'react-scroll';
import { FcMenu } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className={!openDrawer ? styles.navbarContainer : styles.navbarResContainer}>
      <div className={!openDrawer ? styles.navWrapper : styles.navResWrapper}>
        <div className={styles.navbarLeftCol}>
          {!openDrawer ?
            <FcMenu size={40} className={styles.toggleIcon} onClick={() => {
              setOpenDrawer(!openDrawer);
            }} />
            :
            <AiOutlineClose size={35} className={styles.toggleIcon} onClick={() => {
              setOpenDrawer(!openDrawer);
            }} />
          }
          <div className={styles.navbarLeftColItemDiv}>
            <img src={logoBlue} alt="" className={styles.navbarLogo} />
          </div>
        </div>
        <div className={!openDrawer ? styles.navbarRightCol : styles.navbarResRightCol}>
          {navData && navData.map((data, index) => (
            <div key={index} className={!openDrawer ? styles.navbarRightColItemDiv : styles.navbarResRightColItemDiv}>
              {data && data.anyLink ?
                <a
                  href={`#${data?.link}`}
                >
                  <h1 className={styles.navbarRightItem} onClick={() => {
                    setOpenDrawer(false)
                  }}>
                    {data?.item}
                  </h1>
                </a>
                :
                <h1 className={styles.navbarRightItem} onClick={() => {
                  setOpenDrawer(false)
                }}>
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