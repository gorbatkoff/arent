import React from 'react'
import styles from './Advert.module.css';
import AdvertSearch from './AdvertSearch/AdvertSearch';
import Adblock from './AdBlock/AdBlock';

export default function Advert() {
  return (
    <div className={styles.advert}>
        <AdvertSearch></AdvertSearch>
        <Adblock></Adblock>
    </div>
  )
}
