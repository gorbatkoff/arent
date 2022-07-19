import React from 'react'
import { useState } from 'react'
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




export default function Header() {

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
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
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

                        <img src={logo} alt="" />

                        <h1 className={styles.head}><a href="#">ARENT</a></h1>
                    </div>

                    <Input></Input>

                    <div className={styles.menu}>

                        <IconButton aria-label="Сравнить">
                            <AlignVerticalBottomIcon sx={{ color: blueGrey.A200 }}></AlignVerticalBottomIcon>
                        </IconButton>

                        <IconButton aria-label="Избранное">
                            <FavoriteIcon sx={{ color: blueGrey.A200 }}></FavoriteIcon>
                        </IconButton>
                        <IconButton aria-label="Сообщения">
                            <Badge badgeContent={4} color="primary">
                                <ChatBubbleIcon sx={{ color: blueGrey.A200 }}></ChatBubbleIcon>
                            </Badge>
                        </IconButton>
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
                                    Избранные объявления
                                </MenuItem>

                                <MenuItem>
                                    <ListItemIcon>
                                        <SavedSearchOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    Избранные поиски
                                </MenuItem>

                                <MenuItem>
                                    <ListItemIcon>
                                        <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    Чаты
                                </MenuItem>

                                <MenuItem>
                                    <ListItemIcon>
                                        <VpnKeyOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    Бронирования
                                </MenuItem>

                                <MenuItem>
                                    <ListItemIcon>
                                        <AccountBalanceWalletOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    Кошелёк
                                </MenuItem>

                                <MenuItem>
                                    <ListItemIcon>
                                        <PersonOutlineOutlinedIcon fontSize="small" />
                                    </ListItemIcon>
                                    Профиль
                                </MenuItem>

                                <MenuItem sx={{ color: "red" }}>
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
                                    padding: "6px 2%",
                                    fontSize: "14px",
                                    borderRadius: "7px"
                                }}
                                onClick={handleClickOpen}
                            >
                                Войти
                            </Button>

                            <Dialog open={isOpen} onClose={handleClickClose}>
                                {/* <DialogTitle>Subscribe</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        To subscribe to this website, please enter your email address here. We
                                        will send updates occasionally.
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Email Address"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClickClose}>Cancel</Button>
                                    <Button onClick={handleClickClose}>Subscribe</Button>
                                </DialogActions> */}
                                <Authorization />
                            </Dialog>
                        </React.Fragment>}

                    <Button variant="contained" size="small" color="primary"
                        sx={{
                            textTransform: "capitalize",
                            color: "#fff",
                            padding: "6px 2%",
                            fontSize: "14px",
                            borderRadius: "7px"
                        }}
                    >Разместить объявление</Button>
                </div>
            </Container>
        </header>
    )
}
