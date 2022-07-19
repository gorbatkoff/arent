import React from 'react'
import { useState } from 'react'

import { Button } from '@mui/material';
import { IMaskInput } from 'react-imask';

import styles from './Registration.module.css';

export default function Registration({ setTypeOfLogin }) {

  return (
    <div className={styles.registration}>
      <h2>Регистрация</h2>

      <div>
      </div>

      <div className={styles.input}>
        <IMaskInput
          mask="+7 (###)-###-##-##"
          definitions={{
            '#': /[0-9]/
          }}
          placeholder="+7 (___)-___-__-__"
          style={{ textTransform: "none", color: "#78839E", padding: "12px 24px", fontSize: "16px", width: "100%", background: "#E8EDF5", outline: "none", border: "1px solid gray", borderRadius: "7px" }}
        />
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
        onClick={() => setTypeOfLogin("Аутентификация")}
      >Продолжить</Button>

      <div className={styles['already-have-account']}>
        <p onClick={() => setTypeOfLogin("Авторизация")}>Уже есть аккаунт?</p>
      </div>

    </div>

  )
}
