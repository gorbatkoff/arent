import React from 'react';
import styles from './ParticipantMessages.module.css';

function Participant({ message }) {
    return (
        <div className={styles.participant}>
            {message}
        </div>
    )
}

export default Participant