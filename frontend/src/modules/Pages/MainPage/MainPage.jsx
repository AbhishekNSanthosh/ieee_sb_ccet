import React from 'react'
import styles from './MainPage.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import About from '../../components/About/About'

const MainPage = () => {
  return (
    <div className={styles.home}>
      <Navbar/>
      <Banner/>
      <About/>
    </div>
  )
}

export default MainPage