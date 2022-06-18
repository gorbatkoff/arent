import React from 'react'
import styles from './AdvertSearch.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import BrandsList from './BrandsList/BrandsList';
import Tabs from './Tabs/Tabs';

export default function AdvertSearch() {
  return (
    <div className={styles.advertSearch}>
      <h2>Поиск объявлений</h2>

      <div className={styles['choose-options']}>

        <div className={styles['car-type']}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{boxShadow: "none"}}>
            <Button>Эконом</Button>
            <Button>Комфорт</Button>
            <Button>Бизнес</Button>
            <Button>Премиум</Button>
          </ButtonGroup>
        </div>

        <div>
          <Tabs />
        </div>

      </div>

      <div>
        <BrandsList/>
      </div>

      <Button variant="contained"
        sx={{width: "100%", padding: "10px", background: "#316BFE", marginTop: "20px"}}
      >
        Показать 7 532 предложения
      </Button>
    </div>
  )
}
