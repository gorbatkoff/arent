import React from 'react';
import styles from './Promo.module.css';
import PromoCard from './PromoCard/PromoCard';

export default function Promo() {
  return (
    <div className={styles.promo}>

      <PromoCard />
      <PromoCard />
      <PromoCard />
      <PromoCard />
      <PromoCard />
      <PromoCard />

    </div>
  )
}
