import React from 'react'
import CarLogo from '../../../../images/Car.svg';
import styles from './ImageBlock.module.css';

function ImageBlock() {
    return (
        <div className={styles['image-block']}>
            <div className={styles['main-image']}>
                <img src={CarLogo} alt="" />
            </div>

            <div className={styles['small-images']}>
                <div><img src={CarLogo} alt="" /></div>
                <div><img src={CarLogo} alt="" /></div>
                <div><img src={CarLogo} alt="" /></div>
                <div><img src={CarLogo} alt="" /></div>
            </div>
        </div>
    )
}

export default ImageBlock