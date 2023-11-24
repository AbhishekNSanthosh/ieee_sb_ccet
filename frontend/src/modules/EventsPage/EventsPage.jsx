import React, { useEffect } from 'react'
import styles from './EventsPage.module.css'
import EventList from '../../components/EventsList/EventList'
import { EventsData } from '../../utils/data'
import { animateScroll } from 'react-scroll';

const EventsPage = () => {
    useEffect(() => {
        animateScroll.scrollToTop();
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrap}>
                    <div className={styles.eventsRow}>
                        <div className={styles.eventRowItem}>
                            <span className={styles.eventTitle}>Events</span>
                        </div>
                    </div>
                    <div className={styles.eventsRow}>
                        <EventList EventsData={EventsData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsPage