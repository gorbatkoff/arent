import React from 'react';
import FooterLinks from './FooterLinks/FooterLinks'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';
import FooterInfo from './FooterInfo/FooterInfo';

function Footer() {
    return (
        <footer>
            <Container>
                <FooterLinks />
                <Divider variant="middle"/>
                <FooterInfo/>
            </Container>
        </footer>
    )
}

export default Footer