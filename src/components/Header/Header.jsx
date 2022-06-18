import React from 'react'
import styles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Button from '@mui/material/Button';
import { grey, indigo, blueGrey } from '@mui/material/colors';
import Input from '../../UI/Input/Input';
import { style } from '@mui/system';
import logo from '../../images/logo.svg';
import Badge from '@mui/material/Badge';

// const pick = grey[400];



export default function Header() {
    return (
        <header className="container">

            <div className={styles.logo}>

                <MenuIcon sx={{ color: blueGrey.A200 }}></MenuIcon>

                <img src={logo} alt="" />

                <h1 className={styles.head}>ARENT</h1>
            </div>

            <Input></Input>

            <div className={styles.menu}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10.9091" width="2.18182" height="24" fill={blueGrey.A200} />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 16.8199 3.90733 20.7273 8.72727 20.7273V3.27274C3.90733 3.27274 0 7.18007 0 12Z" fill={blueGrey.A200} />
                    <path d="M16.2727 19.6632C20.068 19.1728 23 15.9288 23 12C23 8.07122 20.068 4.82725 16.2727 4.33685V19.6632Z" stroke={blueGrey.A200} stroke-width="2" />
                </svg>

                <FavoriteIcon sx={{ color: blueGrey.A200 }}></FavoriteIcon>

                <Badge badgeContent={4} color="primary">
                    <ChatBubbleIcon sx={{ color: blueGrey.A200 }}></ChatBubbleIcon>
                </Badge>
            </div>


            <Button variant="contained" size="small" color="inherit"
                sx={{
                    textTransform: "capitalize",
                    background: "#E7EBF3",
                    color: "#262D3F",
                    padding: "6px 2%",
                    fontSize: "14px",
                    borderRadius: "7px"
                }}
            >
                Войти
            </Button>
            <Button variant="contained" size="small" color="primary"
                sx={{
                    textTransform: "capitalize",
                    color: "#fff",
                    padding: "6px 2%",
                    fontSize: "14px",
                    borderRadius: "7px"
                }}
            >Разместить объявление</Button>
        </header>
    )
}
