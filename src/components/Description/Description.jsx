import React from 'react'
import { Container } from '@mui/system'

import styles from './Description.module.css'

export default function Description() {
  return (
    <Container className={styles.container}>
        <h2>Легковые автомобили в Москве</h2>

        <p className={styles.description}>7 532 предложения</p>
    </Container>
  )
}
