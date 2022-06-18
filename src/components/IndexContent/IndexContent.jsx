import React from 'react';
import Container from '@mui/material/Container';
// import styles from './IndexContent.module.css';
import Advert from './Advert/Advert';
import RecentlyWatch from './RecentlyWatch/RecentlyWatch';
import CommercialTransport from './CommercialTransport/CommercialTransport';
import Moto from './Moto/Moto';
import Catalog from './Catalog/Catalog';

function IndexContent() {
  return (
    <Container sx={{padding: "100px 0"}}>
        <Advert/>
        <RecentlyWatch/>
        <CommercialTransport/>
        <Moto/>
        <Catalog/>
    </Container>
  )
}

export default IndexContent;