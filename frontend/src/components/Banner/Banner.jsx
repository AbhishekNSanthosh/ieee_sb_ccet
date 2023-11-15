import React from 'react'
import styles from './Banner.module.css'
import banner1 from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src={banner1} alt="" className={styles.bannerImg} />
      <div className={styles.BannerTxtBox}>
        <div className={styles.row}>
          <span className={styles.ieee}>IEEE Students Branch</span>
        </div>
        <div className={styles.row}>
          <span className={styles.collegeName}>Carmel College of Engineering & Technology</span>
        </div>
      </div>
    </div>
  )
}

export default Banner