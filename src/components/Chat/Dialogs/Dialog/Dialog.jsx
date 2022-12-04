import { React, useState, useEffect } from 'react';
import styles from './Dialog.module.css';
import logo from '../../../../images/Car.svg';

import Skeleton from '@mui/material/Skeleton';

function Dialog({ dialog, marks }) {

    function handleTime(time) {
        let indexOf = time.indexOf('T') + 1;
        return time.slice(indexOf, indexOf + 5)
    }

    return (
        <button className={styles.dialog}>
            {dialog['participant_name'] ?
                <>
                    <div className={styles['photo-of-advert']}>
                        <img src={logo} alt="" />
                    </div>

                    <div className={styles['dialog-info']}>
                        <div className={styles['dialog-info-block']}>
                            <h4>{dialog['participant_name']}</h4>
                            <span className={styles['dialog-span']}>{handleTime(dialog['created_at'])}</span>
                        </div>

                        <div className={styles['dialog-info-block']}>
                            {/* <span className={styles['dialog-span']}>{marks.marks['76']['mark_name'] + ' ' + marks.marks['76']['models'][0]['model_name']}</span> */}
                            <span className={styles['dialog-span']}>{dialog['advert_car_price']}₽/ч</span>
                        </div>

                        <div className={styles['dialog-info-block']}>
                            <p>{dialog['last_unread_message_text'].slice(0, 5) + '...'}</p>
                        </div>
                    </div>
                </> 
                
                :

                <Skeleton variant="rounded" width={210} height={60} />
            }
        </button>
    )
}

export default Dialog