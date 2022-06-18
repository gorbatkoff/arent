import React from 'react';
import styles from './Navbar.module.css'

import logo from '../../images/mapMarker.svg';
import { Container } from '@mui/material';

export default function Navbar() {
    return (
        <nav>
            <Container className={styles.nav}>
                <ul>
                    <li><a href="#">Легковые</a></li>
                    <li><a href="#">Коммерческие</a></li>
                    <li><a href="#">Мото</a></li>
                    <li><a href="#">Электромобили</a></li>
                    <li><a href="#">Водный транспорт</a></li>
                </ul>

                <div className={styles.map}>
                    <img src={logo} alt="" />

                    <p>Москва +50 км</p>
                </div>
            </Container>
        </nav>
    )
}
