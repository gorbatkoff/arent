import React from 'react'
import styles from './MarkList.module.css';
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MarkList() {

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
            'Nissan',
            'Opel',
            'Peugeot',
            'Porsche'
        ];

        return arrayOfBrands.map((brand) =>
            <div className={styles.brand}>
                <div>{brand}</div>
                <div className={styles['brand-count']}>152</div>
            </div>
        )
    }

    return (
        <div className={styles.markList}>
            {renderBrands()}
            <Link href="#" underline="hover" sx={{display: "flex", alignItems: "center"}}>
                {'Показать все'}
                <ExpandMoreIcon />
            </Link>
        </div>
    )
}

export default MarkList