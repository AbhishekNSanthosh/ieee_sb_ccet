import React from 'react'
import styles from './MainPage.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import About from '../../components/About/About'
import Branch from '../../components/Branch/Branch'
import Footer from '../../components/Footer/Footer'

const MainPage = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Banner />
     <section id='about-section'>
     <About id="about-section"/>
     </section>
      <Branch />
      <div className={styles.eventContainer}>
        <button className={styles.eventBtn}>Events</button>
      </div>
      <Footer/>
    </div>
  )
}

export default MainPage