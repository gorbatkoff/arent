import React from 'react'
import styles from './Moto.module.css';

export default function Moto() {
  return (
    <div>
      <h2>Мотоциклы и мототехника</h2>

      <div className={styles['moto-cards']}>

        <div className={styles.element}>Мотоциклы</div>
        <div className={styles.element}>Скутеры</div>
        <div className={styles.element}>Мотовездеходы</div>
        <div className={styles.element}>Снегоходы</div>

      </div>
    </div>
  )
}
