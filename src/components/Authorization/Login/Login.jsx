import React from 'react'
import { useState } from 'react'
// import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import { FormControl } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import styles from './Login.module.css';

import VK from '../../../images/socials/VK_Link.svg'
import OK from '../../../images/socials/OK_Link.svg';
import Google from '../../../images/socials/Google_Link.svg';
import Yandex from '../../../images/socials/Yandex_Link.svg';

import axios from 'axios';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// const theme = createTheme();




export default function Login({ setTypeOfLogin, setIsAutorized, setToken }) {


    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const api = axios.create({
        baseURL: 'http://62.113.113.106/auth'
    });

    const setCookie = (token) => {
        localStorage.setItem('token', token);
        document.cookie = `token=${token}`;
    }

    const setUserId = (userId) => {
        localStorage.setItem('userId', userId);
    }

    const getToken = async (login, password) => {
        try {
            let req = await api.post(`/login/`, { "user": { "username": "root", "password": "12344321" } });
            
            console.log(req.data)
            console.log(req.data.user.token);
            
            setToken(req.data.user.token);
            setIsAutorized(true);

            setCookie(req.data.user.token);
            setUserId(req.data.user['user_id'])
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        getToken(data.get('email'), data.get('password'));
    };

    return (

        // <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                            // onClick={() => authorization(login, password)}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        // </ThemeProvider>


        // <div className={styles.login}>
        // {/* <div className={styles['type-of-login']}>
        //     <h2>Вход</h2>
        //     <p onClick={() => setTypeOfLogin("Регистрация")}>Регистрация</p>
        // </div> */}

        // {/* <FormControl>
        //     <InputLabel htmlFor="my-input">Email address</InputLabel>
        //     <Input id="my-input" aria-describedby="my-helper-text" />
        //     <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        // </FormControl> */}

        // {/* <div className={styles.input}>
        //     <div className={styles['input-container']}>
        //         <TextField id="outlined-basic" label="Телефон или почта" variant="outlined" sx={{ width: "100%" }}
        //             onChange={(e) => setLogin(e.target.value)}
        //         />
        //     </div>

        //     <div className={styles['input-container']}>

        //         <TextField
        //             name="password"
        //             type="password"
        //             placeholder="Пароль"
        //             label="Пароль"
        //             id="outlined-basic"
        //             variant="outlined"
        //             sx={{ width: "100%" }}
        //             onChange={(e) => setPassword(e.target.value)}

        //         />
        //     </div>
        // </div>

        // <div className={styles['remember-and-forgot']}>
        //     <div style={{ display: 'flex', alignItems: 'center' }}>
        //         <Checkbox defaultChecked size="small" /> Запомнить меня
        //     </div>

        //     <div>
        //         <a href="#" className={styles['forgot-password']}>Забыли пароль?</a>
        //     </div>
        // </div>

        // <Button variant="contained" size="small" color="primary"
        //     sx={{
        //         textTransform: "capitalize",
        //         color: "#fff",
        //         padding: "10px 2%",
        //         fontSize: "14px",
        //         borderRadius: "7px",
        //         background: "#316BFE",
        //         width: "100%",
        //     }}
        //     onClick={() => authorization(login, password)}
        // >Войти</Button> */}

        // {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        //     <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        //         Неверный логин или пароль!
        //     </Alert>
        // </Snackbar> */}

        // {/* <div className={styles['login-with']}>
        //     <p>Войти через</p>

        //     <div className={styles.link}>
        //         <img src={VK} alt="" />
        //         <img src={OK} alt="" />
        //         <img src={Google} alt="" />
        //         <img src={Yandex} alt="" />
        //     </div>
        // </div>

        // <div className={styles.policy}>
        //     <p>
        //         При входе вы подтверждаете согласие с условиями
        //         использования Arent и политикой о данных пользователей.
        //     </p>
        // </div> */}
        // </div>
    )
}
