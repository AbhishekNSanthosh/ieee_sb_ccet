import React from 'react'
import styles from './Banner.module.css'
import banner1 from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src={banner1} alt="" className={styles.bannerImg} loading='lazy'/>
      <div className={styles.BannerTxtBox}>
        <div className={styles.row}>
          <span className={styles.ieee}>IEEE</span>
          <span className={styles.ieee}>Students Branch</span>
        </div>
        <div className={styles.row}>
          <span className={styles.collegeName}>Carmel College of Engineering & Technology</span>
          <span className={styles.collegeNameCCET}>CCET</span>
        </div>
      </div>
    </div>
  )
}

export default Banner