import React from 'react'
import { Container, TextField } from '@mui/material'
import Title from '../Title/Title';
import Autocomplete from '@mui/material/Autocomplete';

import styles from './Booking.module.css';
import BookingAdvert from './BookingAdvert/BookingAdvert';

export default function Booking() {
    return (

        <Container sx={{ padding: "35px 0" }}>
            <Title title="Бронирования"></Title>

            <div className={styles.booking}>
                <div className={styles.sorting}>
                    <TextField id="outlined-basic" label="Поиск" sx={{ background: "#E8EDF5", width: "300px" }} variant="outlined" />

                    <Autocomplete
                        disablePortal
                        options={top100Films}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Сортировка" />}
                    />
                </div>

                <div className={styles['booking-ads']}>
                    <BookingAdvert/>
                    <BookingAdvert/>
                    <BookingAdvert/>
                </div>
            </div>
        </Container>
    )
}


const top100Films = [
    { label: 'С начала', year: 1994 },
    { label: 'С конца', year: 1972 },
    { label: 'По цене', year: 1974 }
]