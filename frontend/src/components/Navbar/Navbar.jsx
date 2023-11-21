import React, { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css'
import blueLogo from '../../assets/ieeeLogo.svg'
import ieeelogo from '../../assets/ieeeBlue.svg'
import { navLink } from '../../utils/data'
import { Link, useNavigate } from 'react-router-dom'
import { BsJustify, BsChevronDoubleUp, BsChevronRight } from "react-icons/bs";
import cslogo from '../../assets/cslogo.png'
import { toast } from 'react-hot-toast';
import { MdAddAlert } from "react-icons/md";
import Notification from '../Notification/Notification'

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const navigate = useNavigate()

  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotification(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarWrapper}>
          <div className={styles.navbarLeft}>
            <div className={styles.navbarItem}>
              <Link to={'/'}>
                <img src={blueLogo} alt="" className={styles.logo} loading='lazy' />
              </Link>
            </div>
            <div className={styles.navbarItem}>
              <MdAddAlert className={styles.notifyMob} onClick={() => {
                setShowNotification(!showNotification)
              }} />
              {
                !isDrawerOpen ?
                  <BsJustify className={styles.icon} onClick={() => {
                    setIsDrawerOpen(true)
                  }} />
                  :
                  <BsChevronDoubleUp className={styles.icon} onClick={() => {
                    setIsDrawerOpen(false)
                  }} />
              }
            </div>
          </div>
          <div className={styles.navbarRight}>
            {navLink.map((item, index) => (
              <div key={index} className={styles.navbarItemRight} onClick={() => {
                if (item?.link === '/') {
                  toast('Comming Soon !!!', {
                    style: {
                      color: 'red'
                    },
                    duration: 2000
                  })
                } else {
                  navigate(item?.link);
                  setTimeout(() => {
                    setIsDrawerOpen(false)
                  }, 300)

                }
              }}>
                <span className={styles.navLink}>{item?.name}</span>
              </div>
            ))}
            <MdAddAlert className={styles.notify} onClick={() => {
              setShowNotification(!showNotification)
            }} />
          </div>
        </div>
        {isDrawerOpen &&
          <div className={styles.drawer}>
            <div className={styles.drawerList}>
              {navLink.map((item, index) => (
                <div key={index} className={styles.drawerListItem} onClick={() => {
                  if (item?.link === '/') {
                    toast('Comming Soon !!!', {
                      style: {
                        color: 'red'
                      },
                      duration: 2000,
                    })
                  } else {
                    navigate(item?.link);
                    setTimeout(() => {
                      setIsDrawerOpen(false)
                    }, 300)

                  }
                }}>
                  <span className={styles.navLink}>{item?.name}</span>
                  <BsChevronRight className={styles.icon} />
                </div>
              ))}
            </div>
            <div className={styles.drawerBtm}>
              <div className={styles.drawerCreditsRow}>
                <img src={ieeelogo} alt="" className={styles.logobtm} loading='lazy' />
                <img src={cslogo} alt="" className={styles.logobtm} loading='lazy' />
              </div>
              <div className={styles.drawerCredits}>
                <span className={styles.rights}>Copyright © IEEE SB CCET 2023. All Rights Reserved.</span>
                <span className={styles.rights}>Designed and developed by <span className={styles.highlight}>Abhishek Santhosh</span> and <span className={styles.highlight}>Aswin S Sheshadri</span>.</span>
              </div>
            </div>
          </div>
        }
        {showNotification && <Notification ref={notificationRef}/>}
      </div>
    </>
  )
}

export default Navbar