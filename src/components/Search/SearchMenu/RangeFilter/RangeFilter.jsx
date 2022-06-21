import { Button } from '@mui/material';
import React from 'react'

import styles from './RangeFilter.module.css';

export default function RangeFilter() {
  return (
    <div className={styles.range}>
        <button className={styles['range-item']} id="selected" style={{background: "#316BFE", color: "#fff"}}>
            <div>Москва</div>
            <p>532 предложения</p>
        </button>    
        <button className={styles['range-item']}>
            <div>+50 км</div>
            <p>532 предложения</p>
        </button>    
        <button className={styles['range-item']}>
            <div>+100 км</div>
            <p>532 предложения</p>
        </button>    
        <button className={styles['range-item']}>
            <div>+200 км</div>
            <p>532 предложения</p>
        </button>    
    </div>
  )
}
