import React from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import styles from './BookingAdvert.module.css';

export default function BookingAdvert() {
    return (
        <div className={styles.advert}>
            <div className={styles.logo}>

            </div>

            <div className={styles['booking-info']}>
                <h4>BMW X5 2002</h4>

                <p>xDrive M50d AT Base</p>

                <div className={styles['booking-pattern']}>3.0 л (231 л.с.), дизель, АКПП, 4WD</div>

                <p className={styles.description}>Описание объявления (при наличии) Значимость этих проблем настолько</p>
            </div>

            <div className={styles['price-and-seller']}>
                <div className={styles.price}>
                    <span style={{ fontWeight: "bold", fontSize: "20px", color: "#262D3F" }}
                    >2500₽</span>
                    <span style={{ fontWeight: "700", fontSize: "20px", color: "#78839E" }}

                    >/час</span>
                </div>

                <p>Рейтинг продавца</p>

                <div className={styles['author-rating']}>
                    <div>4.5</div>

                    <div>
                        <Rating name="read-only" value='5' readOnly
                            icon={<StarIcon color="primary" fontSize="inherit" />}
                        />
                    </div>
                </div>

                <div className={styles['seller-status']}>
                    <PersonRoundedIcon />
                    <div>Собственник</div>
                </div>
            </div>

            <div className={styles['date-of-booking']}>
                <div className={styles.booked}>Забронировано:</div>
                <div className={styles.dates}>с 13.12 по 14.12</div>
            </div>
        </div>
    )
}
