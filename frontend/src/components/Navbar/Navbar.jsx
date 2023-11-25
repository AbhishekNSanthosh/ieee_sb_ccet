import React, { useState } from 'react'
import styles from './Navbar.module.css'
import blueLogo from '../../assets/ieeeLogo.svg'
import ieeelogo from '../../assets/ieeeBlue.svg'
import { navLink } from '../../utils/data'
import { Link, useNavigate } from 'react-router-dom'
import { BsJustify, BsChevronDoubleUp, BsChevronRight } from "react-icons/bs";
import cslogo from '../../assets/cslogo.png'
import { toast } from 'react-hot-toast';
import { MdAddAlert } from "react-icons/md";
// import Notification from '../Notification/Notification'
import nothing from '../../assets/nothing.svg'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button
} from '@chakra-ui/react'

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate()

  return (
      <div className={styles.navbarContainer}>
        <div className={styles.navbarWrapper}>
          <div className={styles.navbarLeft}>
            <div className={styles.navbarItem}>
              <Link to={'/'}>
                <img src={blueLogo} alt="" className={styles.logo} loading='lazy' />
              </Link>
            </div>
            <div className={styles.navbarItem}>
              <Popover>
                <PopoverTrigger>
                  <Button variant={"link"} colorScheme='white' mr={4} size="0.5rem">
                    <MdAddAlert className={styles.notifyMob} onClick={() => {
                      console.log(showNotification)
                      setShowNotification(!showNotification)
                    }} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent width="100%" marginRight="2.2rem"  top={3}>
                  <PopoverArrow />
                  <PopoverCloseButton mt={2} color="blue"/>
                  <PopoverHeader fontSize={20} fontWeight={600}>Notification </PopoverHeader>
                  <PopoverBody width="21rem" height="60vh" display="flex" alignItems="center" justifyContent="center">
                    <div className={styles.notifyrow}>
                      <img src={nothing} alt="" className={styles.nothingImg} />
                      <span className={styles.notifyEmpty}>
                        No notifications right now !!!
                      </span>
                    </div>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
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
            <Popover>
              <PopoverTrigger>
                <Button variant={"link"} colorScheme='white'>
                  <MdAddAlert className={styles.notify} onClick={() => {
                    console.log(showNotification)
                    setShowNotification(!showNotification)
                  }} />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                width="90%" mr="10"
                top={3}
                boxShadow='rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
                display='flex'
              >
                <PopoverArrow />
                <PopoverCloseButton marginTop={2} color="blue" />
                <PopoverHeader fontSize={20} fontWeight={600}>Notification </PopoverHeader>
                <PopoverBody width="23rem" height="60vh" display="flex" alignItems="center" justifyContent="center">
                  <div className={styles.notifyrow}>
                    <img src={nothing} alt="" className={styles.nothingImg} />
                    <span className={styles.notifyEmpty}>
                      No notifications right now !!!
                    </span>
                  </div>
                </PopoverBody>
              </PopoverContent>
            </Popover>
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
        {/* {showNotification && <Notification />} */}
      </div>
  )
}

export default Navbar