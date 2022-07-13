import React from 'react'
import PublicationDate from '../../PublicationDate/PublicationDate';
import Title from '../../Title/Title'
import AdsButton from './AdsButton';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';

import styles from './AdvertMain.module.css';
import DatePicker from './DatePicker/DatePicker';
import ImageBlock from './ImageBlock/ImageBlock';

import AdvertButton from './AdvertButton';

import Ava from '../../../images/avatars/avatar.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Characteristic from './Characteristic/Characteristic';

function AdvertMain() {
    return (
        <div className={styles.main}>
            <div className={styles['advert-main']}>
                <Title title="BMW X5 48i II (E70)" />
                <PublicationDate date={new Date()} />
                <AdsButton />
                <ImageBlock />
            </div>

            <div className={styles['advert-info']}>
                <div className={styles.price}><span style={{ fontWeight: "bold", fontSize: "26px", color: "#262D3F" }}
                >2500₽</span>
                    <span style={{ fontWeight: "700", fontSize: "20px", color: "#78839E" }}

                    >/час</span>
                </div>

                <DatePicker />

                <div className={styles['offer-buttons']}>
                    <AdvertButton text="Написать продавцу"/>
                    <br/>
                    <br/>
                    <AdvertButton text="Забронировать" />
                </div>

                <div className={styles['ad-info']}>
                    <div>
                        <div className={styles['ad-author']}>
                            <h4>Александр</h4>
                        </div>

                        <div className={styles['author-role']}>
                            Частное лицо
                        </div>

                        <div className={styles['author-rating']}>
                            <div>4.5</div>

                            <div>
                                <Rating name="read-only" value='5' readOnly
                                    icon={<StarIcon color="primary" fontSize="inherit" />}
                                />
                            </div>
                        </div>

                        <div className={styles['count-of-deal']}>
                            Успешных сделок: 23
                        </div>

                        <div className={styles['count-of-ads']}>
                            Объявлений: 35
                        </div>
                    </div>

                    <div>
                        <Avatar alt="Remy Sharp" src={Ava}
                            sx={{ width: 56, height: 56 }}
                        ></Avatar>
                    </div>
                </div>

                <div className={styles['ad-index']}>
                    <div className={styles.viewers}>
                        <VisibilityIcon />
                        <div>419 + 7</div>
                    </div>

                    <div className={styles['ad-number']}>
                        № 12411256
                    </div>
                </div>

            </div>

            <Characteristic />
        </div>
    )
}

export default AdvertMain