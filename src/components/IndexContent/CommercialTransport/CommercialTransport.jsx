import React from 'react'
import Button from '@mui/material/Button';
import styles from './CommercialTransport.module.css';

function CommercialTransport() {
    return (
        <div className={styles.commercial}>
            <h2>Коммерческий транспорт</h2>

            <div className={styles.blocks}>

                <div className={styles['left-blocks']}>
                    <div className={styles.block}>Легкие<br />коммерчиские</div>
                    <div className={styles.block}>Грузовики</div>
                    <div className={styles.block}>Строительная<br />и дорожная</div>
                    <div className={styles.block}>Погрузчики</div>
                </div>

                <div className={styles['right-blocks']}>
                    <div className={styles.block}>Седельные тягачи</div>
                    <Button variant="contained" id={styles['look-more']}>Посмотреть все</Button>
                </div>
            </div>
        </div>
    )
}

export default CommercialTransport