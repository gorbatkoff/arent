import React from 'react'
import { Container } from '@mui/system'

import styles from './Description.module.css'

export default function Description({description}) {
  return (
    <Container className={styles.container}>
        <h2>{description}</h2>

        <p className={styles.description}>7 532 предложения</p>
    </Container>
  )
}
