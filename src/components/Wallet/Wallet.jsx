import React from 'react';
import { Container, TextField } from '@mui/material'

import styles from './Wallet.module.css';
import Title from '../Title/Title';
import BasicButtons from '../../UI/Button/BasicButton';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Wallet() {
    return (
        <Container sx={{ padding: "35px 0" }}>
            <Title title="Кошелёк"></Title>

            <div className={styles.wallet}>

                <div className={styles['wallet-manage']}>
                    <div className={styles['balance-of-wallet']}>
                        <h4>Баланс кошелька</h4>

                        <div className={styles.balance}>
                            2500₽
                        </div>

                        <p>Добавить карту +</p>
                    </div>

                    <div className={styles['replenish-of-wallet']}>
                        <h4>Пополнение кошелька</h4>

                        <div className={styles.replenish}>
                            <TextField id="outlined-basic" label="Введите сумму" variant="outlined" sx={{ color: 'red' }} />
                            <BasicButtons text="Пополнить" />
                        </div>

                    </div>
                </div>


                <div className={styles['last-operations']}>
                    <div className={styles['title-and-report']}>
                        <h4>Последние операции</h4>
                        <p>Запросить отчёт</p>
                    </div>

                    <div className={styles.operations}>
                        <div className={styles.operation}>
                            <div>Название</div>
                            <div>Дата</div>
                            <div>Статус</div>
                            <div>Сумма</div>
                        </div>

                        <div className={styles.operation}>
                            <div className={styles.name}>Название операции</div>
                            <div className={styles.date}>27.02.2022</div>
                            {
                                true ?

                                    <div className={styles.status}><CheckIcon sx={{ color: "#25CA5D" }} />Завершён</div>
                                    :
                                    <div className={styles.status}><AccessTimeIcon sx={{ color: "#FF7121" }} />В процессе</div>
                            }
                            <div className={styles.amount}>2500₽</div>
                        </div>

                        <div className={styles.operation}>
                            <div className={styles.name}>Название операции</div>
                            <div className={styles.date}>27.02.2022</div>
                            {
                                false ?

                                    <div className={styles.status}><CheckIcon sx={{ color: "#25CA5D" }} />Завершён</div>
                                    :
                                    <div className={styles.status}><AccessTimeIcon sx={{ color: "#FF7121" }} />В процессе</div>
                            }
                            <div className={styles.amount}>2500₽</div>
                        </div>

                        <div className={styles.operation}>
                            <div className={styles.name}>Название операции</div>
                            <div className={styles.date}>27.02.2022</div>
                            {
                                true ?

                                    <div className={styles.status}><CheckIcon sx={{ color: "#25CA5D" }} />Завершён</div>
                                    :
                                    <div className={styles.status}><AccessTimeIcon sx={{ color: "#FF7121" }} />В процессе</div>
                            }
                            <div className={styles.amount}>2500₽</div>
                        </div>

                        <div className={styles.operation}>
                            <div className={styles.name}>Название операции</div>
                            <div className={styles.date}>27.02.2022</div>
                            {
                                false ?

                                    <div className={styles.status}><CheckIcon sx={{ color: "#25CA5D" }} />Завершён</div>
                                    :
                                    <div className={styles.status}><AccessTimeIcon sx={{ color: "#FF7121" }} />В процессе</div>
                            }

                            <div className={styles.amount}>2500₽</div>
                        </div>
                    </div>
                </div>

            </div>

        </Container>
    )
}
