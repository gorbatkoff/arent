import React from 'react';
import styles from './BrandsList.module.css'
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BrandsList() {

    const renderBrands = () => {
        const arrayOfBrands = [
            'AUDI',
            "BMW",
            'Changan',
            'Chery',
            'Chevrolet',
            'Citroen',
            'Daewoo',
            'Ford',
            'Geely',
            'Havai',
            'Honda',
            'Hyundai',
            'Infinity',
            'Kia',
            'Land Rover',
            'Lexus',
            'Mazda',
            'Mercedes-Benz',
            'Mitsubishi',
            'Nissan',
            'Opel',
            'Peugeot',
            'Porsche',
            'Renault',
            'Skoda',
            'Subaru',
            'Suzuki',
            'Toyota',
            'Tesla',
            'Volkswagen',
            'Volvo',
            'ВАЗ (LADA)',
            'ГАЗ',
            'УАЗ'
        ];

        return arrayOfBrands.map((brand, i) => 
        <div className={styles.brand} key={i}>
            <div>{brand}</div>
            <div className={styles['brand-count']}>152</div>
        </div>)
    }

    return (
        <div className={styles.brands}>
            {renderBrands()}
            <Link href="#" underline="hover" sx={{display: "flex", alignItems: "center"}}>
                {'Показать все'}
                <ExpandMoreIcon />
            </Link>
        </div>
    )
}
