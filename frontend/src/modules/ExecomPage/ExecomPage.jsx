import React, { useEffect } from 'react'
import styles from './ExecomPage.module.css'
import logo from '../../assets/bg.png'
import MemberList from '../../components/MemberList/MemberList'
import { CSExecom, SBExecom } from '../../utils/data'
import { animateScroll } from 'react-scroll';

const ExecomPage = () => {

  useEffect(() => {
    animateScroll.scrollToTop();
  }, [])

  return (
    <>
      <div className={styles.execomContainer}>
        <div className={styles.wrapper}>
          <div className={styles.wrap}>
            <div className={styles.box}>
              <div className={styles.execomRow}>
                <span className={styles.title}>IEEE students branch</span>
              </div>
              <div className={styles.execomRow}>
                <MemberList members={SBExecom} />
              </div>
            </div>
            <div className={styles.boxbtm}>
              <div className={styles.execomRow}>
                <span className={styles.title}>Computer Society</span>
              </div>
              <div className={styles.execomRow}>
                <MemberList members={CSExecom} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExecomPage