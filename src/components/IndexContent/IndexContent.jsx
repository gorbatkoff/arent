import React from 'react';
import Container from '@mui/material/Container';
// import styles from './IndexContent.module.css';
import Advert from './Advert/Advert';
import RecentlyWatch from './RecentlyWatch/RecentlyWatch';
import CommercialTransport from './CommercialTransport/CommercialTransport';
import Moto from './Moto/Moto';
import Catalog from './Catalog/Catalog';
import Title from '../Title/Title';

function IndexContent() {
  return (
    <Container sx={{padding: "10px 0"}}>
        <Title title="Легковые автомобили в Москве"></Title>
        <p style={{ fontWeight: '400', color: '#78839E', fontSize: '16px', paddingBottom: "5em" }}>7 532 предложения</p>
        <Advert/>
        <RecentlyWatch/>
        <CommercialTransport/>
        <Moto/>
        <Catalog/>
    </Container>
  )
}

export default IndexContent;