import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/ieeeLogo.svg'
import { socials } from '../../utils/data'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerRow}>
                    <div className={styles.footerRowLeft}>
                        <div className={styles.footerRowRight}>
                            <img src={logo} alt="" className={styles.logoImg} loading='lazy'/>
                        </div>
                        <div className={styles.footerRowRight}>
                            <span className={styles.actions}>Privacy policy</span>
                            <span >|</span>
                            <span className={styles.actions}>Disclaimer</span>
                        </div>
                    </div>
                    <div className={styles.footerRowRight}>
                        {socials.map((item, index) => (
                            <div key={index} className={styles.footerRightItem}>
                                <a href={item.url}>
                                    <img src={item.icon} alt="" className={styles.socials} loading='lazy'/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.footerRowBtm}>
                    <span className={styles.rights}>Copyright © IEEE SB CCET 2023. All Rights Reserved.</span>
                    <span className={styles.rights}>Designed and developed by <span className={styles.highlight}>Abhishek Santhosh</span> and <span className={styles.highlight}>Aswin S Sheshadri</span>.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer