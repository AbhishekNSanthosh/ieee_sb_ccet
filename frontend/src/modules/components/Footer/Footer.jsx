import React from 'react'
import styles from './Footer.module.css'
import logo from '../../../assets/IEEE_White.png'
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerCol}>
                <div className={styles.footerLeft}>
                    <h6 className={styles.contact}>
                        Contact Us
                    </h6>
                    <span className={styles.college}>
                        Carmel College of Engineering and Technology
                    </span>
                    <span className={styles.college}>
                        Punnapara, Alappuzha
                    </span>
                    <span className={styles.college}>
                        688009
                    </span>
                    <span className={styles.college}>
                        PH No : xxxxxxxxxxxxx
                    </span>
                </div>
                <div className={styles.footerRight}>
                    <div className={styles.imgBox}>
                        <img src={logo} alt="" className={styles.footerLogo} />
                    </div>
                    <div className={styles.iconContainer}>
                        <AiOutlineInstagram size={30} className={styles.icons} />
                        <AiOutlineMail size={30} className={styles.icons} />
                    </div>
                </div>
            </div>
            <div className={styles.rights}>
                <span className={styles.rightsTxt}>
                    Copyrights @ 2023 All Rights Reserved by IEEE CCET
                </span>
            </div>
        </div>
    )
}

export default Footer