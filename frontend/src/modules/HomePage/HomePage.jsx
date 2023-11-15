import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar/>
      <Banner/>
    </div>
  )
}

export default HomePage