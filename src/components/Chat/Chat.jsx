import { React, useState, useEffect } from 'react';

import styles from './Chat.module.css';
import Dialogs from './Dialogs/Dialogs';

function Chat() {
    return (
        <div className={styles['chat-wrapper']}>
            <div className={styles.dialogs}>
                <h3>Сообщения</h3>

                <Dialogs />
            </div>

            <div className={styles.chat}>
                <h3>Чат</h3>
            </div>
        </div>
    )
}

export default Chat