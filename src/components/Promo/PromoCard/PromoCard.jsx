import React from 'react';
import styles from './PromoCard.module.css';
import CardLogo from '../../../images/Car.svg';

export default function PromoCard() {
  return (
    <div className={styles.card}>

      <div className={styles['card-img']}>

        <img src={CardLogo} alt="" />

      </div>

      <div className={styles.model}>
        BMW X5-2002
      </div>

      <div className={styles.price}>
        2500 ₽
      </div>
    </div>
  )
}
