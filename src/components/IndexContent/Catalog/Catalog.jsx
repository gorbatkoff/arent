import React from 'react';
import styles from './Catalog.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Catalog() {
    return (
        <div className={styles.catalog}>

            <div className={styles['catalog-wrapper']}>
                <h2>Справочник</h2>

                <a href="">
                    <div className={styles['catalog-more']}>
                        <p>Все статьи</p>
                        <ExpandMoreIcon />
                    </div>
                </a>
            </div>

            <div className={styles['catalog-articles']}>
                <div>
                    <div className={styles['article-logo']}></div>
                    <div className={styles['article-description']}>Как происходит сделка</div>
                </div>
                <div>
                    <div className={styles['article-logo']}></div>
                    <div className={styles['article-description']}>Как разместить своё <br/> объявление</div>
                </div>
                <div>
                    <div className={styles['article-logo']}></div>
                    <div className={styles['article-description']}>Проверяем авто по базам</div>
                </div>
                <div>
                    <div className={styles['article-logo']}></div>
                    <div className={styles['article-description']}>Коммерческий транспорт и <br/> процесс регистрации</div>
                </div>
            </div>

        </div>
    )
}
