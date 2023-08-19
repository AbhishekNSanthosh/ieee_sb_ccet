import React from 'react'
import styles from './Banner.module.css'
import BannerImg from '../../../assets/CCETLOGO.svg'
const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <img src={BannerImg} alt="CCET_logo" className={styles.bannerImg}/>
        </div>
    )
}

export default Banner