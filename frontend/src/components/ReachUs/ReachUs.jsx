import React, { useEffect } from 'react'
import styles from './ReachUs.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const ReachUs = () => {
    useEffect(() => {
        Aos.init({ duration: 800 });
      }, [])
    return (
        <div className={styles.reachUsContainer} data-aos="fade-down">
            <div className={styles.reachUsWrapper}>
                <div className={styles.reachUsRow}>
                    <span className={styles.reachUsTitle}>Reach Us</span>
                </div>
                <div className={styles.reachUsRow}>
                    <div className={styles.reachUsDataRow}>
                        <div className={styles.rowLeft} >
                            <div className={styles.rowItem}>
                                <span className={styles.coordinatorTitle}>Faculty Coordinators:</span>
                            </div>
                            <div className={styles.rowItem}>
                                <span className={styles.coordinator}>Faculty Name</span>
                                <span className={styles.mobile}>Faculty no.</span>
                            </div>
                            <div className={styles.rowItem}>
                                <span className={styles.coordinator}>Faculty Name</span>
                                <span className={styles.mobile}>Faculty no.</span>
                            </div>
                        </div>
                        <div className={styles.rowRight}>
                            <div className={styles.rowItemRight}>
                                <span className={styles.coordinatorTitle}>Student Coordinators:</span>
                            </div>
                            <div className={styles.rowItemRight}>
                                <span className={styles.coordinator}>Faculty Name</span>
                                <span className={styles.mobile}>Faculty no.</span>
                            </div>
                            <div className={styles.rowItemRight}>
                                <span className={styles.coordinator}>Faculty Name</span>
                                <span className={styles.mobile}>Faculty no.</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.reachUsDataRow}></div>
                </div>
            </div>
        </div>
    )
}

export default ReachUs