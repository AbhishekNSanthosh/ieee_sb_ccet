import React from 'react'
import styles from './Notification.module.css'
import nothing from '../../assets/nothing.svg'
const Notification = () => {
  return (
      <div className={styles.NotificationBox}>
        <img src={nothing} alt="" className={styles.nothingImg} />
        <span className={styles.info}>No pending notifications at the moment.</span>
      </div>
  )
}

export default Notification