import React from 'react'
import styles from '../../modules/HomePage/HomePage.module.css'

const EventList = ({ EventsData }) => {
    return (
        <div className={styles.eventsBox}>
            {EventsData.map((event, index) => (
                <div key={index} className={styles.eventItem}>
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
    )
}

export default EventList