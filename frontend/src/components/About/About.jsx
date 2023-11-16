import React from 'react'
import styles from './About.module.css'
import carmel from '../../assets/carmel.svg'

const About = () => {
    return (
        <div className={styles.AboutContainer}>
            <div className={styles.aboutRowTop}>
                <span className={styles.aboutTitle}>About Us</span>
            </div>
            <div className={styles.aboutRow}>
                <div className={styles.aboutLeft}>
                    <p className={styles.aboutTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className={styles.aboutRight}>
                    <img src={carmel} alt="" className={styles.carmelLogo} />
                </div>
            </div>
        </div>
    )
}

export default About