import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';

import styles from './Login.module.css';

import VK from '../../../images/socials/VK_Link.svg'
import OK from '../../../images/socials/OK_Link.svg';
import Google from '../../../images/socials/Google_Link.svg';
import Yandex from '../../../images/socials/Yandex_Link.svg';

import axios from 'axios';

export default function Login({ setTypeOfLogin, setIsAutorized }) {

    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const api = axios.create({
        baseURL: 'http://62.113.113.106/auth'
    });

    const getToken = async (login, password) => {
        try {
            const data ={
                user: {
                    username: login, 
                    password: password
                }
            };

            let req = await api.post(`/login/`, { "user": { "username": "root", "password": "12344321" } });
            console.log(req.data.user.token);
            setIsAutorized(true);
        }
        catch (err) {
            alert("Something gone wrong!")
        }
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    function authorization(login, password) {
        if (login.length < 3 || password.length < 3) {
            setOpen(true);
            throw new Error("msg");
        }

        getToken(login, password);

    }

    return (
        <div className={styles.login}>
            <div className={styles['type-of-login']}>
                <h2>Вход</h2>
                <p onClick={() => setTypeOfLogin("Регистрация")}>Регистрация</p>
            </div>

            <div className={styles.input}>
                <div className={styles['input-container']}>
                    <TextField id="outlined-basic" label="Телефон или почта" variant="outlined" sx={{ width: "100%" }}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>

                <div className={styles['input-container']}>

                    {/* <TextField id="outlined-basic" label="Пароль" variant="outlined" sx={{ width: "100%" }} /> */}
                    <TextField
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        label="Пароль"
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        onChange={(e) => setPassword(e.target.value)}

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
                onClick={() => authorization(login, password)}
            >Войти</Button>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Неверный логин или пароль!
                </Alert>
            </Snackbar>

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
