import React from 'react'
import Button from '@mui/material/Button';

import styles from "./AdvertButton.module.css";

function AdvertButton({ text }) {
    return (
        <Button variant="contained" className={styles.button}>{text}</Button>
    )
}

export default AdvertButton