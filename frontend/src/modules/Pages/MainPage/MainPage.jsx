import React from 'react'
import styles from './MainPage.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'

const MainPage = () => {
  return (
    <div className={styles.home}>
      <Navbar/>
      <Banner/>
    </div>
  )
}

export default MainPage