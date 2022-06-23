import React from 'react'
import styles from './AdCard.module.css';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import cardLogo from '../../../../../images/Car.svg';


function AdCard({ title, complectation, characteristics, description, date, price, statusOfSeller, rating }) {
    return (
        <div className={styles.card}>
            <div className={styles['card-logo']}>
                <img src={cardLogo} alt="Фото авто" />
            </div>

            <div className={styles['card-info']}>
                <div className={styles['card-title']}>
                    {title}
                </div>

                <p style={{ fontWeight: 500 }}>{complectation}</p>

                <div className={styles['card-characteristics']}>
                    {characteristics}
                </div>

                <p className={styles.description}>
                    {description}
                </p>

                <div className={styles['card-date']}>
                    {date}
                </div>
            </div>

            <div className={styles['card-price']}>
                <div className={styles['card-price-title']}>
                    <span>{price}₽</span>/час

                    <p>Рейтинг продавца</p>


                    <div className={styles['ad-rating']}>
                        {rating}

                        <Rating name="read-only" value={rating} readOnly
                            icon={<StarIcon color="primary" fontSize="inherit" />}
                        />
                    </div>

                    <div className={styles['seller-status']}>
                        <PersonRoundedIcon />
                        <div>Собственник</div>
                    </div>
                </div>
            </div>

            <div className={styles['add-to-favorite']}>
                <FavoriteBorderIcon sx={{color: "#78839E"}}/>
            </div>

        </div>
    )
}

export default AdCard;