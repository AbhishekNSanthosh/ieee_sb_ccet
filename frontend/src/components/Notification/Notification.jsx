import React from 'react'
import styles from './Notification.module.css'
import nothing from '../../assets/nothing.svg'
const Notification = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.row}>
        <span className={styles.Title}>Your Notifcation</span>
      </div>
      <div className={styles.NotificationBox}>
        <img src={nothing} alt="" className={styles.nothingImg} />
        <span className={styles.info}>No pending notifications at the moment.</span>
      </div>
    </div>
  )
}

export default Notification