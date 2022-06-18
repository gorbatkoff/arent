import React from 'react';
import styles from './FooterInfo.module.css';

import VK from '../../../images/socials/VK.svg';
import Instagram from '../../../images/socials/Instagram.svg';
import Telegram from '../../../images/socials/Telegram.svg';
import YouTube from '../../../images/socials/YouTube.svg';
import TikTok from '../../../images/socials/TikTok.svg';

export default function FooterInfo() {
    return (
        <div className={styles.information}>
            <div>
                <div className={styles.copyright}>
                    <h3>ARENT</h3>

                    <p>© 2022</p>
                </div>
            </div>

            <div className={styles.social}>
                <a href="#"><img src={VK} alt="" /></a>
                <a href="#"><img src={Instagram} alt="" /></a>
                <a href="#"><img src={Telegram} alt="" /></a>
                <a href="#"><img src={YouTube} alt="" /></a>
                <a href="#"><img src={TikTok} alt="" /></a>
            </div>

            <div className={styles.faq}>
                <ul>
                    <li><a href="#">О проекте</a></li>
                    <li><a href="#">Помощь</a></li>
                    <li><a href="#">Правила</a></li>
                    <li><a href="#">Пользовательское соглашение</a></li>
                    <li><a href="#">Модели авто</a></li>
                </ul>
            </div>
        </div>
    )
}
