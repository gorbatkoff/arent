import React from 'react';
import styles from './RecentlyWatch.module.css';
import PromoCard from '../../Promo/PromoCard/PromoCard';

import {Link} from 'react-router-dom'


export default function RecentlyWatch() {
  return (
    <div>
      <h2>Просмотренные объявления</h2>

      <div className={styles.announcements}>
        <div>
          <Link to="/advert/1">
            <PromoCard />
            <p className={styles.description}>Москва, Пражская</p>
            <p className={styles.description}>8 часов назад</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
