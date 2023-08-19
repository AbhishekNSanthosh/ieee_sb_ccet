import React from 'react'
import styles from './Branch.module.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Branch = () => {
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
            transition={{ duration: 1 }}
        >
            <div className={styles.branchContainer}>
                <div className={styles.branchCol}>
                    <div className={styles.cardLeft}>
                        <span className={styles.cardTxt}>IEEE</span>
                        <span className={styles.cardTxt}>Students Branch</span>
                    </div>
                </div>
                <div className={styles.branchCol}>
                    <div className={styles.cardRight}>
                        <span className={styles.cardTxt}>IEEE</span>
                        <span className={styles.cardTxt}>Computer Society</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Branch