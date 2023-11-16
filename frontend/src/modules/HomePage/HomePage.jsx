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
    </div>
  )
}

export default HomePage