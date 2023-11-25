import React, { useEffect } from 'react'
import Banner from '../../components/Banner/Banner'
import styles from './HomePage.module.css'
import About from '../../components/About/About'
import { EventsData } from '../../utils/data'
import ReachUs from '../../components/ReachUs/ReachUs'
import EventList from '../../components/EventsList/EventList'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
import { animateScroll } from 'react-scroll';

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
    animateScroll.scrollToTop();
  }, [])

  const navigate = useNavigate();
  return (
    <div className={styles.homeContainer}>
      <Banner />
      <section id='about' name="about">
        <About />
      </section>
      <div className={styles.actions} data-aos="fade-up">
        <div className={styles.actionRow}>
          <div className={styles.actionLeft} >
            <div className={styles.studentsBranch}>
              <span className={styles.txt}>IEEE</span>
              <span className={styles.txt}>Students Branch</span>
            </div>
          </div>
          <div className={styles.actionRight} >
            <div className={styles.csSociety}>
              <span className={styles.txt}>IEEE</span>
              <span className={styles.txt}>Computer Society</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.eventsContainer} data-aos="fade-up">
        <div className={styles.eventsRow}>
          <span className={styles.eventTitle}>Events So Far...</span>
        </div>
        <EventList EventsData={EventsData.slice(0, 3)} />
        <div className={styles.moreEventRow}>
          <button className={styles.moreEvents} onClick={() => {
            navigate('/events')
          }}>View more events from us</button>
        </div>
      </div>

      <ReachUs />
    </div>
  )
}

export default HomePage