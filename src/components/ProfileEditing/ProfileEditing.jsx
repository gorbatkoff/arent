import React from 'react';
import Container from '@mui/material/Container';

import styles from './ProfileEditing.module.css';
import Title from '../Title/Title';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import VK from '../../images/socials/VK_Link.svg';
import OK from '../../images/socials/OK_Link.svg';
import Google from '../../images/socials/Google_Link.svg';
import Yandex from '../../images/socials/Yandex_Link.svg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


function ProfileEditing() {
    const marks = [
        { label: 'Changan' },
        { label: 'Chery' },
        { label: 'Chevrolet' },
        { label: 'Citroen' },
        { label: 'Daewoo' },
        { label: 'Haval' },
        { label: 'Honda' },
    ];

    return (
        <Container sx={{ padding: "35px 0" }} maxWidth='md'>
            <div className={styles.title}>
                <Title title='Редактирование профиля' />
                <div className={styles['profile-id']}>ID: 21312</div>
            </div>

            <div className={styles['profile-edit']}>
                <div className={styles['photo-and-exit']}>
                    <div className={styles.photo}></div>

                    <div className={styles.exit}>
                        <ExitToAppIcon/>
                        <div>Выход</div>
                    </div>
                </div>

                <div className={styles.edit}>
                    <h3>Привяжите соцсеть</h3>

                    <div className={styles.link}>
                        <img src={VK} alt="" />
                        <img src={OK} alt="" />
                        <img src={Google} alt="" />
                        <img src={Yandex} alt="" />
                    </div>

                    <h4>Личные данные</h4>

                    <div className={styles.input}>
                        <div className={styles['input-form']}>
                            <TextField id="outlined-basic" variant="outlined" label="Имя" />
                        </div>
                        <div className={styles['input-form']}>
                            <TextField id="outlined-basic" variant="outlined" label="Город" />
                        </div>
                        <div className={styles['autocomplete-form']}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={marks}
                                sx={{ background: "#D8E6FF", border: "0" }}
                                renderInput={(params) => <TextField {...params} label='Владельцев по ПТС' />}
                            />
                        </div>

                        <div className={styles['input-form']}>
                            <TextField id="outlined-basic" variant="outlined" label="Дата рождения" />
                        </div>
                    </div>

                    <h4>Номер телефона</h4>
                    <div className={styles.input}>
                        <div className={styles['input-form']}>
                            <TextField id="outlined-basic" variant="outlined" label="+79002601564" />
                        </div>
                    </div>

                    <h4>Электронная почта</h4>
                    <div className={styles.input}>
                        <div className={styles['input-form']}>
                            <TextField id="outlined-basic" variant="outlined" label="Введите вашу почту" />
                        </div>
                    </div>

                    <Button color="primary" variant="contained">Сохранить изменения</Button>
                </div>
            </div>
        </Container>
    )
}

export default ProfileEditing;

//  background: "#F5F8FD" 