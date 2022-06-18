import React from 'react';
import styles from './Banner.module.css'

function Banner() {
  return (
    <div className={styles.banner}>
      <p className={styles.promo}>
        Реклама
      </p>

      <div className={styles['banner-logo']}>

      </div>

      <div className={styles['banner-title']}>
        Заголовок рекламного <br /> объявления
      </div>

      <div className={styles['banner-description']}>
        Подекст рекламного объявления с <br/>
        подробной информацией
      </div>
    </div>
  )
}

export default Banner