import React from 'react';

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react'
import styles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Button from '@mui/material/Button';
import { blueGrey } from '@mui/material/colors';
import Input from '../../UI/Input/Input';

import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import logo from '../../images/logo.svg';
import Badge from '@mui/material/Badge';
import { Container } from '@mui/material';

import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// Modal window
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Authorization from '../Authorization/Authorization';
import Chat from '../Chat/Chat';




export default function Header({ token, setToken, marks }) {

    const isTokenExist = () => {
        if(localStorage.getItem('token')) setIsAutorized(true);
    }

    useEffect(() => {
        isTokenExist();
    }, []);

    const [isAutorized, setIsAutorized] = useState(false);




    // Modal window of log in
    const [isOpen, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    // Modal window of avatar profile
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' &&  event.key === 'Shift') {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={styles['drawer-block']}>
                <div className={styles['drawer-list']}>
                    <h5>Страховки</h5>
                    <h5>Отзывы</h5>
                    <h5>Каталог</h5>
                    <h5>Безопасная сделка</h5>
                </div>

                <div className={styles['drawer-list']}>
                    <div className={styles['drawer-list-block']}>
                        <h5>Легковые</h5>
                        <div>
                            <a href="">Иномарки</a>
                            <a href="">Отечественные</a>
                            <a href="">Новинки автопрома</a>
                        </div>
                    </div>

                    <div className={styles['drawer-list-block']}>
                        <h5>Электромобили</h5>
                        <div>
                            <a href="">Новинки</a>
                            <a href="">Аккумуляторные</a>
                            <a href="">Гибридные</a>
                            <a href="">Plug-in электромобиль</a>
                        </div>
                    </div>
                </div>


                <div className={styles['drawer-list']}>
                    <div className={styles['drawer-list-block']}>
                        <h5>Мото</h5>
                        <div>
                            <a href="">Мотоциклы</a>
                            <a href="">Скутеры</a>
                            <a href="">Мотовездеходы</a>
                            <a href="">Снегоходы</a>
                        </div>
                    </div>

                    <div className={styles['drawer-list-block']}>
                        <h5>Водный транспорт</h5>
                        <div>
                            <a href="">Яхты</a>
                            <a href="">Моторные лодки</a>
                            <a href="">Водные скутеры</a>
                            <a href="">Катеры</a>
                        </div>
                    </div>
                </div>
                <div className={styles['drawer-list']}>
                    <div className={styles['drawer-list-block']}>
                        <h5>Коммерческие</h5>
                        <div>
                            <a href="">Лёгкие коммерчиские</a>
                            <a href="">Грузовики</a>
                            <a href="">Седельные тягачи</a>
                            <a href="">Автобусы</a>
                            <a href="">Прицепы и полуприцепы</a>
                            <a href="">Сельскохозяйственная</a>
                            <a href="">Строительная и дорожная</a>
                            <a href="">Погрузчики</a>
                            <a href="">Автокраны</a>
                            <a href="">Экскаваторы</a>
                            <a href="">Бульдозеры</a>
                            <a href="">Коммунальная</a>
                        </div>
                    </div>
                </div>
                <div className={styles['drawer-list']}>
                    <div className={styles['drawer-list-block']}>
                        <h5>Разное</h5>
                        <div>
                            <a href="">Форумы</a>
                            <a href="">Договор купли-продажи</a>
                            <a href="">Помощь</a>
                            <a href="">Стань частью команды</a>
                            <a href="">О проекте</a>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );

    const chat = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 900 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <Chat token={token} marks={marks}/>
        </Box>
    );

    // Return

    return (
        <header>
            <Container className={styles['header-container']}>

                <div className={styles['header']}>
                    <div className={styles.logo}>

                        <IconButton aria-label="Открыть меню" onClick={toggleDrawer('top', true)}>
                            <MenuIcon sx={{ color: blueGrey.A200 }}></MenuIcon>
                        </IconButton>

                        <Drawer
                            anchor='top'
                            open={state['top']}
                            onClose={toggleDrawer('top', false)}
                        >
                            {list('top')}
                        </Drawer>

                        <Link to="/" style={{ display: 'flex', width: 'fit-content', margin: '0', alignItems: "center" }}>
                            <img src={logo} alt="" />

                            <h1 className={styles.head} styles={{ width: 'fit-content' }}>ARENTUM</h1>
                        </Link>
                    </div>

                    <Input></Input>

                    <div className={styles.menu}>

                        <IconButton aria-label="Сравнить">
                            <AlignVerticalBottomIcon sx={{ color: blueGrey.A200 }}></AlignVerticalBottomIcon>
                        </IconButton>

                        <IconButton aria-label="Избранное">
                            <FavoriteIcon sx={{ color: blueGrey.A200 }}></FavoriteIcon>
                        </IconButton>

                        <IconButton aria-label="Сообщения" title="Сообщения" onClick={toggleDrawer('right', true)}>
                            <Badge badgeContent={4} color="primary">
                                <ChatBubbleIcon sx={{ color: blueGrey.A200 }}></ChatBubbleIcon>
                            </Badge>
                        </IconButton>

                        <Drawer
                            anchor='right'
                            open={state['right']}
                            onClose={toggleDrawer('right', false)}
                        >
                            {chat('right')}
                        </Drawer>
                    </div>

                    {isAutorized ?
                        <React.Fragment>
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    // src="/static/images/avatar/1.jpg"
                                    sx={{ width: 40, height: 40 }}
                                />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem sx={{ display: 'flex' }}>
                                    <Avatar />
                                    <div style={{ fontSize: '14px' }}>
                                        <p style={{ fontWeight: "bold" }}>Частное лицо</p>
                                        <p>+79002001111</p>
                                    </div>
                                </MenuItem>
                                <Divider />

                                <MenuItem>
                                    <ListItemIcon>
                                        <ArticleOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    Мои объявления
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <FavoriteBorderOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Link to="/favorite-ads"
                                        style={{ color: 'black' }}
                                    >
                                        Избранные объявления
                                    </Link>
                                </MenuItem>

                                <MenuItem>
                                    <ListItemIcon>
                                        <SavedSearchOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Link to="/favorite-searchs"
                                        style={{ color: 'black' }}
                                    >
                                        Избранные поиски
                                    </Link>
                                </MenuItem>

                                <MenuItem>
                                    <ListItemIcon>
                                        <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Link to="/chats"
                                        style={{ color: 'black' }}
                                    >
                                        Чаты
                                    </Link>
                                </MenuItem>

                                <MenuItem>
                                    <ListItemIcon>
                                        <VpnKeyOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Link to="/booking"
                                        style={{ color: 'black' }}
                                    >
                                        Бронирования
                                    </Link>
                                </MenuItem>

                                <MenuItem>
                                    <ListItemIcon>
                                        <AccountBalanceWalletOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Link to='/wallet'
                                        style={{ color: 'black' }}
                                    >Кошелёк</Link>
                                </MenuItem>

                                <MenuItem>
                                    <ListItemIcon>
                                        <PersonOutlineOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Link to="/profile"
                                        style={{ color: 'black' }}
                                    >
                                        Профиль
                                    </Link>
                                </MenuItem>

                                <MenuItem sx={{ color: "red" }} onClick={() => setIsAutorized(false)}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" color="error" />
                                    </ListItemIcon>
                                    Выход
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <Button variant="contained" size="small" color="inherit"
                                sx={{
                                    textTransform: "capitalize",
                                    background: "#E7EBF3",
                                    color: "#262D3F",
                                    padding: "11px 26px",
                                    fontSize: "14px",
                                    borderRadius: "7px"
                                }}
                                onClick={handleClickOpen}
                            >
                                Войти
                            </Button>

                            <Dialog open={isOpen}  onClose={handleClickClose}>
                                <Authorization setIsAutorized={setIsAutorized} setToken={setToken} />
                            </Dialog>
                        </React.Fragment>
                    }
                    <Link to="/create" style={{ width: 'fit-content' }}>
                        <Button variant="contained" size="small" className={styles['create-advert']} color="primary"
                            sx={{
                                textTransform: "none",
                                color: "#fff",
                                padding: "10px",
                                fontSize: "16px",
                                borderRadius: "7px",
                                width: "max-content",
                                margin: "0"
                            }}
                        >Разместить объявление</Button>
                    </Link>
                </div>
            </Container>
        </header>
    )
}
