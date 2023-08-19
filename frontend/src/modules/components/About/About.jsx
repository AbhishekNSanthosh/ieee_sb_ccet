import React from 'react'
import styles from './About.module.css'
import carmelLogo from '../../../assets/LOGO_CARMEL.svg'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.5,   // Set the visibility threshold
    });

    const animationVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <motion.div
            ref={ref}
            className="animated-component"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.aboutContainer}>
                <div className={styles.aboutRow}>
                    <span className={styles.aboutTitle}>About us</span>
                </div>
                <div className={styles.aboutRowBtm}>
                    <div className={styles.aboutRowColLeft}>
                        <span className={styles.aboutData}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim liquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </div>
                    <div className={styles.aboutRowColRight}>
                        <img src={carmelLogo} alt="" className="" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About