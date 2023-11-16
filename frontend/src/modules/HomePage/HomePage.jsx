import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import styles from './HomePage.module.css'
import About from '../../components/About/About'

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Banner />
      <section id='about'>
        <About />
      </section>
      <div className={styles.actions}>
        <div className={styles.actionRow}>
          <div className={styles.actionLeft}>
            <div className={styles.studentsBranch}>
              <span className={styles.txt}>IEEE</span>
              <span className={styles.txt}>Students Branch</span>
            </div>
          </div>
          <div className={styles.actionRight}>
            <div className={styles.csSociety}>
              <span className={styles.txt}>IEEE</span>
              <span className={styles.txt}>Computer Society</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage