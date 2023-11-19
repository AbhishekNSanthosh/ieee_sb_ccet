import React, { useEffect } from 'react'
import styles from './About.module.css'
import carmel from '../../assets/carmel.svg'
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 800 });
      }, [])
    return (
        <div className={styles.AboutContainer}>
            <div className={styles.aboutRowTop}>
                <span className={styles.aboutTitle}>About Us</span>
            </div>
            <div className={styles.aboutRow}>
                <div className={styles.aboutLeft} data-aos="fade-up">
                    <p className={styles.aboutTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className={styles.aboutRight} data-aos="fade-up">
                    <img src={carmel} alt="" className={styles.carmelLogo} loading='lazy'/>
                </div>
            </div>
        </div>
    )
}

export default About