import React from 'react'
import AdCard from './AdCard/AdCard';

import Pagination from '@mui/material/Pagination';

import Button from '@mui/material/Button';
import styles from './AdList.module.css';

export default function AdList() {

    const data = [
        {
            nameOfAd: 'BMW X5 2002',
            complectation: 'xDrive M50d AT Base',
            characteristics: '3.0 л (231 л.с.), дизель, АКПП, 4WD',
            description: 'Описание объявления (при наличии) Значимость этих проблем настолько',
            dateOfAd: 'Москва, Пражская 2 часа назад',
            priceOfAd: "2500",
            statusOfSeller: 'Собственник',
            ratingOfSeller: '4.5'
        },

        {
            nameOfAd: 'BMW X5 2002',
            complectation: 'xDrive M50d AT Base',
            characteristics: '3.0 л (231 л.с.), дизель, АКПП, 4WD',
            description: 'Описание объявления (при наличии) Значимость этих проблем настолько',
            dateOfAd: 'Москва, Пражская 2 часа назад',
            priceOfAd: "2500",
            statusOfSeller: 'Собственник',
            ratingOfSeller: '4.5'

        },

        {
            nameOfAd: 'BMW X5 2002',
            complectation: 'xDrive M50d AT Base',
            characteristics: '3.0 л (231 л.с.), дизель, АКПП, 4WD',
            description: 'Описание объявления (при наличии) Значимость этих проблем настолько',
            dateOfAd: 'Москва, Пражская 2 часа назад',
            priceOfAd: "2500",
            statusOfSeller: 'Собственник',
            ratingOfSeller: '4.5'

        },

        {
            nameOfAd: 'BMW X5 2002',
            complectation: 'xDrive M50d AT Base',
            characteristics: '3.0 л (231 л.с.), дизель, АКПП, 4WD',
            description: 'Описание объявления (при наличии) Значимость этих проблем настолько',
            dateOfAd: 'Москва, Пражская 2 часа назад',
            priceOfAd: "2500",
            statusOfSeller: 'Собственник',
            ratingOfSeller: '4.5'

        },
    ]

    return (
        <div>
            {
                data.map(data => <AdCard
                    title={data.nameOfAd}
                    complectation={data.complectation}
                    characteristics={data.characteristics}
                    description={data.description}
                    date={data.dateOfAd}
                    price={data.priceOfAd}
                    statusOfSeller={data.statusOfSeller}
                    rating={data.ratingOfSeller}
                />
                )
            }


            <Button variant="text"
                sx={{
                    background: "#E8EDF5", color: "#78839E", width: "100%", padding: "10px",
                    border: "none",
                    boxShadow: "none",
                    textTransform: "none",
                    margin: "40px 0",
                    borderRadius: "7px"
                }}
            >
                Показать больше

            </Button>

            <div>
                <Pagination count={10} variant="text" shape="rounded" sx={{background: "none"}} color="primary"
                size="large"/>
            </div>
        </div>
    )
}
