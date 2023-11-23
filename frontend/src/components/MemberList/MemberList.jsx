import React from 'react'
import styles from './MemberList.module.css'

const MemberList = ({ members }) => {
    return (
        <div className={styles.container}>
            {members.map((member, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.row}>
                        <img src={member?.img} alt="" className={styles.memberImg} loading='lazy'/>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.name}>{member?.name}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.rolename}>{member?.role}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MemberList