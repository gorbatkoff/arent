import React from 'react';
import styles from './RecentlyWatch.module.css';
import PromoCard from '../../Promo/PromoCard/PromoCard';


export default function RecentlyWatch() {
  return (
    <div>
        <h2>Просмотренные объявления</h2>
        
        <div className={styles.announcements}>
            <div><PromoCard/>
                <p className={styles.description}>Москва, Пражская</p>
                <p className={styles.description}>8 часов назад</p>            
            </div>
            <div><PromoCard/>
                <p className={styles.description}>Москва, Пражская</p>
                <p className={styles.description}>8 часов назад</p>            
            </div>
            <div><PromoCard/>
                <p className={styles.description}>Москва, Пражская</p>
                <p className={styles.description}>8 часов назад</p>            
            </div>
            <div><PromoCard/>
                <p className={styles.description}>Москва, Пражская</p>
                <p className={styles.description}>8 часов назад</p>            
            </div>
            <div><PromoCard/>
                <p className={styles.description}>Москва, Пражская</p>
                <p className={styles.description}>8 часов назад</p>            
            </div>
        </div>
    </div>
  )
}
