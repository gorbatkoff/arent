import { Container } from '@mui/material'
import React from 'react';
import BasicButtons from '../../UI/Button/BasicButton';
import Title from '../Title/Title';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import PromoCard from '../Promo/PromoCard/PromoCard';

import Rating from '@mui/material/Rating';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import styles from './Profile.module.css';

export default function Profile() {


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Container sx={{ padding: "35px 0" }}>
            <div className={styles.title}>
                <Title title='Профиль' />
                <div className={styles['profile-id']}>ID: 21312</div>
            </div>

            <div className={styles.profile}>
                <div className={styles['profile-photo']}>

                </div>

                <div className={styles['profile-info']}>
                    <div className={styles['name-and-settings']}>
                        <div>
                            <h3>Владимир</h3>
                            <div className={styles['seller-status']}>
                                <PersonRoundedIcon />
                                <div>Собственник</div>
                            </div>
                        </div>

                        <BasicButtons text='Настройки профиля'></BasicButtons>
                    </div>

                    <div className={styles['profile-rating']}>
                        <div className={styles['author-rating']}>
                            <div>4.5</div>

                            <div>
                                <Rating name="read-only" value='5' readOnly
                                    icon={<StarIcon color="primary" fontSize="inherit" />}
                                />
                            </div>
                        </div>

                        <div className={styles['count-of-success-deal']}>
                            Успешных сделок: 23
                        </div>

                        <div className={styles['count-of-ads']}>
                            Объявлений: 35
                        </div>
                    </div>

                    <hr />

                    <div className={styles['profile-data']}>
                        <div>
                            <p>Регистрация на Arentum</p>
                            <div className={styles.item}>12 марта 2022 г.</div>
                        </div>

                        <div>
                            <p>Возраст</p>
                            <div className={styles.item}>22 года</div>
                        </div>

                        <div>
                            <p>Стаж вождения</p>
                            <div className={styles.item}>2 года</div>
                        </div>

                        <div>
                            <p>Город</p>
                            <div className={styles.item}>г. Екатеринбург</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['profile-tabs']}>
                <Box sx={{ width: '100%', typography: 'body1', background: "#F5F8FD", margin: "20px 0" }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Объявления (18)" value="1" />
                                <Tab label="Успешные сделки (20)" value="2" />
                                <Tab label="Отзывы (12)" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div style={{ display: 'flex', padding: "30px 0" }}>
                                <div><PromoCard />
                                    <p style={{ color: "#78939E", fontSize: "14px", fontWeight: "400" }}>Москва, Пражская</p>
                                </div>
                                <div><PromoCard />
                                    <p style={{ color: "#78939E", fontSize: "14px", fontWeight: "400" }}>Москва, Пражская</p>
                                </div>
                                <div><PromoCard />
                                    <p style={{ color: "#78939E", fontSize: "14px", fontWeight: "400" }}>Москва, Пражская</p>
                                </div>
                                <div><PromoCard />
                                    <p style={{ color: "#78939E", fontSize: "14px", fontWeight: "400" }}>Москва, Пражская</p>
                                </div>
                                <div><PromoCard />
                                    <p style={{ color: "#78939E", fontSize: "14px", fontWeight: "400" }}>Москва, Пражская</p>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel value="2">
                        </TabPanel>

                        <TabPanel value="3">
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </Container >
    )
}
