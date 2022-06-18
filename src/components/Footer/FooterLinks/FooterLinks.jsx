import React from 'react';
import styles from './FooterLinks.module.css';

export default function FooterLinks() {
    return (
        <ul className={styles.links}>
            <li><a href="#">Легковой транспорт</a></li>
            <li><a href="#">Коммерческий транспорт</a></li>
            <li><a href="#">Мото</a></li>
            <li><a href="#">Электромобили</a></li>
            <li><a href="#">Водный транспорт</a></li>
            <li><a href="#">Реклама на сайте</a></li>
            <li><a href="#">Техподдержка</a></li>
            <li><a href="#">Подать объявление</a></li>
            <li><a href="#">Правовыве вопросы</a></li>
            <li><a href="#">Безопасность</a></li>
        </ul>
    )
}
