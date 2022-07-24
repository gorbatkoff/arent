import React from 'react';
import styles from './Promo.module.css';
import PromoCard from './PromoCard/PromoCard';

import {Link} from 'react-router-dom'

export default function Promo() {
  return (
    <div className={styles.promo}>

      <Link to="/advert/1" style={{margin: "0"}}><PromoCard /></Link>
      <Link to="/advert/1" style={{margin: "0"}}><PromoCard /></Link>
      <Link to="/advert/1" style={{margin: "0"}}><PromoCard /></Link>
      <Link to="/advert/1" style={{margin: "0"}}><PromoCard /></Link>
      <Link to="/advert/1" style={{margin: "0"}}><PromoCard /></Link>
      <Link to="/advert/1" style={{margin: "0"}}><PromoCard /></Link>

    </div>
  )
}
