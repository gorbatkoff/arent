import React from 'react'

import { Button } from '@mui/material';
import { IMaskInput } from 'react-imask';
import styles from './EnterCode.module.css';

function EnterCode({ setTypeOfLogin }) {
    return (
        <div className={styles.enter}>
            <h2>Подтверждение</h2>

            <p className={styles.alert}>
                Введите подтверждающий код, мы отправили его на
                номер +79001112020. Приходит в течении 2-х минут.
            </p>

            <div className={styles.input}>
                <IMaskInput
                    mask="### ###"
                    definitions={{
                        '#': /[0-9]/
                    }}
                    placeholder="Код"
                    style={{ textTransform: "none", color: "#78839E", padding: "12px 24px", fontSize: "16px", width: "100%", background: "#E8EDF5", outline: "none", border: "1px solid gray", borderRadius: "7px" }}
                />
            </div>

            <div className={styles['resend-code']}>
                <p>
                    Отправить код повторно
                </p>
            </div>

            <Button variant="contained" size="small" color="primary"
                sx={{
                    textTransform: "capitalize",
                    color: "#fff",
                    padding: "10px 2%",
                    fontSize: "14px",
                    borderRadius: "7px",
                    background: "#316BFE",
                    width: "100%"
                }}
            >Продолжить</Button>

            <Button variant="outlined" size="small" color="primary"
                sx={{
                    textTransform: "capitalize",
                    color: "#316BFE",
                    padding: "10px 2%",
                    fontSize: "14px",
                    borderRadius: "7px",
                    background: "#fff",
                    width: "100%",
                    marginTop: "1em"
                }}
                onClick={() => setTypeOfLogin("Регистрация")}
            >Изменить номер</Button>

        </div>
    )
}

export default EnterCode