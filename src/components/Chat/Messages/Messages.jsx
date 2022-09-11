import React from 'react'
import MyMessages from './ParticipantMessages/MyMessages';
import Participant from './ParticipantMessages/Participant';

import styles from './Messages.module.css';

function Messages({ messages }) {

    const userId = localStorage.getItem('userId');

    return (
        <div className={styles.chat}>
            
            {/* MyMessage => Моё сообщение,  Companion => Сообщение собеседника */}

            {messages.map((message) => {

                if(message.owner == Number(userId)) return <MyMessages message={message.text}/>

                else{ return <Participant message={message.text}/>}

                
            })}
        </div>
    )
}

export default Messages