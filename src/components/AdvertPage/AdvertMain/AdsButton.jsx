import React from 'react'
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { blue } from '@mui/material/colors';

import styles from './AdsButton.module.css';

function AdsButton() {
  return (
    <div className={styles.buttons}>
      <Button variant="outlined">
        <FavoriteBorderIcon color="primary" />
        <div>
          Добавить в избранное
        </div>
      </Button>

      <Button variant="outlined">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          color="red"
          >
          <rect x="10.9091" width="2.18182" height="24" fill={blue[800]} />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 16.8199 3.90733 20.7273 8.72727 20.7273V3.27274C3.90733 3.27274 0 7.18007 0 12Z" fill={blue[800]} />
          <path d="M16.2727 19.6632C20.068 19.1728 23 15.9288 23 12C23 8.07122 20.068 4.82725 16.2727 4.33685V19.6632Z" stroke={blue[800]} strokeWidth="2" />
        </svg>
        <div style={{paddingLeft: "5px"}}>
          Сравнить
        </div>
      </Button>

      <Button variant="outlined">Пожаловаться</Button>
    </div>
  )
}

export default AdsButton;