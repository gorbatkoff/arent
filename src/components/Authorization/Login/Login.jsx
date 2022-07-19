import React from 'react'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

import styles from './Login.module.css';
import { Button } from '@mui/material';

import VK from '../../../images/socials/VK_Link.svg'
import OK from '../../../images/socials/OK_Link.svg';
import Google from '../../../images/socials/Google_Link.svg';
import Yandex from '../../../images/socials/Yandex_Link.svg';

export default function Login({ setTypeOfLogin }) {
    return (
        <div className={styles.login}>
            <div className={styles['type-of-login']}>
                <h2>Вход</h2>
                <p onClick={() => setTypeOfLogin("Регистрация")}>Регистрация</p>
            </div>

            <div className={styles.input}>
                <div className={styles['input-container']}><TextField id="outlined-basic" label="Телефон или почта" variant="outlined" sx={{ width: "100%" }} /></div>
                <div className={styles['input-container']}>

                    {/* <TextField id="outlined-basic" label="Пароль" variant="outlined" sx={{ width: "100%" }} /> */}
                    <TextField
                        name="password"
                        type="password"
                        placeholder="password"
                        label="Пароль"
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: "100%" }} 
                    />
                </div>
            </div>

            <div className={styles['remember-and-forgot']}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox defaultChecked size="small" /> Запомнить меня
                </div>

                <div>
                    <a href="#" className={styles['forgot-password']}>Забыли пароль?</a>
                </div>
            </div>

            <Button variant="contained" size="small" color="primary"
                sx={{
                    textTransform: "capitalize",
                    color: "#fff",
                    padding: "10px 2%",
                    fontSize: "14px",
                    borderRadius: "7px",
                    background: "#316BFE",
                    width: "100%",
                }}
            >Войти</Button>

            <div className={styles['login-with']}>
                <p>Войти через</p>

                <div className={styles.link}>
                    <img src={VK} alt="" />
                    <img src={OK} alt="" />
                    <img src={Google} alt="" />
                    <img src={Yandex} alt="" />
                </div>
            </div>

            <div className={styles.policy}>
                <p>
                    При входе вы подтверждаете согласие с условиями
                    использования Arent и политикой о данных пользователей.
                </p>
            </div>
        </div>
    )
}
