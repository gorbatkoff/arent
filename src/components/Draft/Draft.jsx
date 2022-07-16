import React from 'react';

import styles from './Draft.module.css';

function Draft({ title, description, price }) {
    return (
        <div className={styles.draft}>
            <div className={styles.logo}></div>
            <div className={styles.description}>
                <h2>{title}</h2>
                <p>{description}</p>

                <div className={styles['draft-continue']}>
                    <div>Продолжить заполнение</div>
                    <div>Удалить</div>
                </div>
            </div>

            <div className={styles.price}>
                <div>
                    <span className={styles['price-span']}>{price}₽</span>
                    <span className={styles['time-span']}>/час</span></div>
                <p>Черновик</p>
            </div>
        </div>
    )
}

export default Draft