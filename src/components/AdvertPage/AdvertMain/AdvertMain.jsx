import React from 'react'
import PublicationDate from '../../PublicationDate/PublicationDate';
import Title from '../../Title/Title'
import AdsButton from './AdsButton';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';

import styles from './AdvertMain.module.css';

import ImageBlock from './ImageBlock/ImageBlock';
// import DatePicker from './DatePicker/DatePicker';

import AdvertButton from './AdvertButton';

import Ava from '../../../images/avatars/avatar.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Characteristic from './Characteristic/Characteristic';
import BasicButtons from '../../../UI/Button/BasicButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

function AdvertMain({advert}) {

    const getMinDay = () => {
        let year = new Date().getFullYear();
        let month = new Date().getMonth() + 1;
        let day = new Date().getDate();

        if (+month < 10) month = "0" + month;

        return `${year}-${month}-${day}`;
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

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
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

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
                >{advert.price}₽</span>
                {/* >2500₽</span> */}
                    <span style={{ fontWeight: "700", fontSize: "20px", color: "#78839E" }}

                    >/час</span>
                </div>

                <div className={styles['dates-block']}>
                    <div>Данное авто забронировано на следующие дни</div>
                    <div className={styles.dates}>
                        <div>08.07.22</div>
                        <div>09.07.22</div>
                    </div>
                </div>

                <div className={styles['offer-buttons']}>
                    {/* <BasicButtons text="Написать продавцу" style={{ width: "100%" }} onClick={toggleDrawer('right', true)} /> */}
                    <React.Fragment key='right'>
                        <Button onClick={toggleDrawer('right', true)}
                            className={styles['advert-button']}
                            sx={{
                                background: "#316BFE",
                                borderRadius: "7px",
                                color: "white",
                                textTransform: "none",
                                padding: "15px 27px",
                                fontSize: "14px"
                            }}>Написать продавцу</Button>
                        <Drawer
                            anchor='right'
                            open={state['right']}
                            onClose={toggleDrawer('right', false)}
                        >
                            {list('right')}
                        </Drawer>
                    </React.Fragment>
                    <br />
                    <br />

                    <React.Fragment>
                        <Button onClick={handleClickOpen}
                            className={styles['advert-button']}
                            sx={{
                                background: "#316BFE",
                                borderRadius: "7px",
                                color: "white",
                                textTransform: "none",
                                padding: "15px 27px",
                                fontSize: "14px"
                            }}>
                            Забронировать
                        </Button>

                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                <h3>Выберите даты бронирования авто</h3>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <div>
                                        <h4>Выбрать период</h4>

                                        <div className={styles['date-picker']}>
                                            <div>

                                                С <input type="date"
                                                    min={getMinDay()} max="2023-12-31"
                                                />
                                            </div>
                                            <div>По <input type="date" /></div>
                                        </div>

                                        <h4>Выбрать определённую дату</h4>

                                        <div className={styles['date-picker']}>
                                            <input type="date"
                                                min={getMinDay()} max="2023-12-31"
                                            />
                                        </div>
                                    </div>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button onClick={handleClose}>Отмена</Button>
                                <Button onClick={handleClose} autoFocus variant="contained" sx={{background: "#316BFE"}}>
                                    Запросить бронь
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </React.Fragment>
                    {/* <BasicButtons text="Забронировать" style={{ width: "400px" }} /> */}
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

            <Characteristic advert={advert}/>
        </div>
    )
}

export default AdvertMain