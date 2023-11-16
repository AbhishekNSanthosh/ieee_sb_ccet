import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import styles from './HomePage.module.css'
import About from '../../components/About/About'
import { EventsData } from '../../utils/data'

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

      <div className={styles.eventsContainer}>
        <div className={styles.eventsRow}>
          <span className={styles.eventTitle}>Events So Far...</span>
        </div>
        <div className={styles.eventsBox}>
          {EventsData.slice(0, 3).map((event, index) => (
            <div className={styles.eventItem}>
              <div className={styles.eventItemBox}>
                <img src={event.pic} alt="" className={styles.eventPic} />
              </div>
              <div className={styles.eventItemTxtBox}>
                <span className={styles.eventName}>{event.title}</span>
              </div>
              <div className={styles.eventItemTxtBox}>
                <p className={styles.desc}>{event.desc.slice(0, 100)}... <p className={styles.readmore}>Read More...</p></p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.moreEventRow}>
          <button className={styles.moreEvents}>View more events from us</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage