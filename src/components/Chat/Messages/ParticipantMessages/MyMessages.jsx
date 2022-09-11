import React from 'react'
import styles from './ParticipantMessages.module.css';

function MyMessages({ message }) {
    return (
        <div className={styles.owner}>
            {message}
        </div>
    )
}

export default MyMessages