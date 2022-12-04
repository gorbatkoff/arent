import React from 'react'
import styles from './Characteristic.module.css';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Insuranse from '../../../../images/Insuranse.svg';
import AdvertButton from '../../../../../UI/AdvertButton/AdvertButton';
import CheckCircle from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';

import PromoCard from '../../../../Promo/PromoCard/PromoCard';

import { green, grey } from '@mui/material/colors';
import BasicButtons from '../../../../../UI/Button/BasicButton';

export default function Characteristic({ advert }) {
    return (
        <div>
            <h2>Характеристики</h2>

            <div className={styles.characteristic}>
                <div className={styles['characteristic-list']} style={{ color: "#78839E" }}>
                    <div>Год выпуска</div>
                    <div>Поколение</div>
                    <div>Двигатель</div>
                    <div>Коробка</div>
                    <div>Пробег</div>
                    <div>Цвет</div>
                </div>

                <div className={styles['characteristic-list']} style={{ textAlign: 'right' }}>
                    <div>{advert.year_of_car_purchase}</div>
                    <div>E53 (1999—2003)</div>
                    <div>4.8 л / 355 л.с. / Бензин</div>
                    <div>Автоматическая</div>
                    <div>{advert.mileage} км</div>
                    <div>Белый</div>
                </div>

                <div className={styles['characteristic-list']} style={{ color: "#78839E" }}>
                    <div>Привод</div>
                    <div>Руль</div>
                    <div>Таможня</div>
                    <div>VIN</div>
                    <div>Госномер</div>
                    <div>ПТС</div>
                </div>

                <div className={styles['characteristic-list']} style={{ textAlign: 'right' }}>
                    <div>Полный</div>
                    <div>Левый</div>
                    <div>Растоможен</div>
                    <div style={{ color: "#316BFE" }}>WBA**************</div>
                    <div style={{ color: "#316BFE" }}>******|122</div>
                    <div style={{ color: "#316BFE" }}>77 ** ******</div>
                </div>
            </div>

            <div className={styles['type-of-insurance']}>
                <div className={styles['image-and-insurance']}>
                    <img src={Insuranse} alt="" />

                    <div>Тип страховки: <span style={{ color: "#316BFE" }}>Открытая</span></div>
                </div>

                <HelpOutlineIcon />
            </div>

            <div className={styles.insurance}>
                <h3>Страховка</h3>

                <p>Заполните заявку, которую сможете отправить в
                    несколько страховых агенств и оформить её онлайн.</p>

                {/* <AdvertButton text="Оформить страховку" /> */}
                <BasicButtons text="Оформить страховку" />
            </div>

            <div className={styles['check-by-vin']}>
                <div className={styles.checking}>
                    <h2>Проверка по VIN</h2>
                    <p style={{ color: "#78839E" }}>Отчет от 25 апреля 2022 года</p>
                </div>

                <div className={styles['characteristic-points']}>
                    <div className={styles['point-item']}>
                        <CheckCircle sx={{ color: green[400] }} />
                        <div>Характеристики совпадают с ПТС </div>
                    </div>
                    <div className={styles['point-item']}>
                        <CheckCircle sx={{ color: green[400] }} />
                        <div>Данные о ДТП не найдены</div>
                    </div>
                    <div className={styles['point-item']}>
                        <CheckCircle sx={{ color: green[400] }} />
                        <div>Данные о розыске и запрете на регистрацию не найдены </div>
                    </div>
                    <div className={styles['point-item']}>
                        <CheckCircle sx={{ color: green[400] }} />
                        <div>10 владельцев в ПТС</div>
                    </div>

                    <div className={styles['point-item']}>
                        <LockIcon sx={{ color: grey[600] }} />
                        <div>3 записи в истории пробегов</div>
                    </div>

                    <div className={styles['point-item']}>
                        <LockIcon sx={{ color: grey[600] }} />
                        <div>Поиск данных о залоге</div>
                    </div>

                    <div className={styles['point-item']}>
                        <LockIcon sx={{ color: grey[600] }} />
                        <div>3 записи в истории эксплуатации</div>
                    </div>

                    <div className={styles['point-item']}>
                        <LockIcon sx={{ color: grey[600] }} />
                        <div>Проверка на работу в такси</div>
                    </div>
                </div>
                {/* <AdvertButton text="Купить полный отчёт" /> */}
                <BasicButtons text="Купить полный отчёт" />
            </div>

            <div className={styles.description}>
                <h2>Описание</h2>

                <div>
                    Значимость этих проблем настолько очевидна, что новая модель
                    организационной деятельности позволяет оценить значение
                    направлений прогрессивного развития. Задача организации, в
                    особенности же консультация с профессионалами из IT представляет
                    собой интересный эксперимент проверки системы масштабного
                    изменения ряда параметров. Дорогие друзья, выбранный нами
                    инновационный путь требует определения и уточнения
                    соответствующих условий активизации?
                </div>

                <h2>Дополнительные опции</h2>

                <div style={{ padding: "10px 0" }}>
                    <strong>Комфорт</strong>
                </div>

                <div className={styles.additional}>
                    <div>Кондиционер</div>
                    <div>Система выбора режима движения</div>
                    <div>Круиз-контроль</div>
                    <div>Система помощи при парковке</div>
                    <div>Мультифункциональное рулевое колесо</div>
                    <div>Система доступа без ключа</div>
                    <div>Регулировка руля</div>
                    <div>Электропривод зеркал</div>
                    <div>Бортовой компьютер</div>
                    <div>Электростеклоподъёмники</div>
                    <div>Усилитель руля</div>
                </div>

                <div style={{ padding: "30px 0 5px 0" }}>
                    <strong>Безопасность</strong>
                </div>
                <div className={styles.additional}>
                    <div>Подушки безопасности</div>
                    <div>Система стабилизации ESP</div>
                    <div>Вспомогательные системы</div>
                    <div>Антиблокировочная система ABS</div>
                    <div>Система крепления Isonix</div>
                </div>


                <div style={{ padding: "30px 0 5px 0" }}>
                    <strong>Мультимедия</strong>
                </div>
                <div className={styles.additional}>
                    <div>Аудиосистема</div>
                    <div>Bluetooth</div>
                    <div>Мультимедиа с ЖК-экраном</div>
                    <div>USB</div>
                    <div>Навигационная система</div>
                    <div>AUX</div>
                    <div>Розетка 12V</div>
                </div>

                <h2>Спросите у продавца</h2>
            </div>

            <div className={styles['ask-seller']}>
                <div style={{ display: 'flex' }}>
                    <button>Объявление актуально</button>
                    <button>Где можно посмотреть</button>
                </div>
                <button>В выходные аренда возможна?</button>
            </div>

            <h2>Похожие объявления</h2>

            <div style={{ display: 'flex', padding: "30px 0" }}>
                <div><PromoCard />
                    <p className={styles['promo-description']}>Москва, Пражская</p>
                </div>
                <div><PromoCard />
                    <p className={styles['promo-description']}>Москва, Пражская</p>
                </div>
                <div><PromoCard />
                    <p className={styles['promo-description']}>Москва, Пражская</p>
                </div>
                <div><PromoCard />
                    <p className={styles['promo-description']}>Москва, Пражская</p>
                </div>
            </div>

            <h2>Спец предложения</h2>

            <div style={{ display: 'flex', padding: "30px 0" }}>
                <div><PromoCard />
                    <p className={styles['promo-description']}>Москва, Пражская</p>
                </div>
                <div><PromoCard />
                    <p className={styles['promo-description']}>Москва, Пражская</p>
                </div>
                <div><PromoCard />
                    <p className={styles['promo-description']}>Москва, Пражская</p>
                </div>
                <div><PromoCard />
                    <p className={styles['promo-description']}>Москва, Пражская</p>
                </div>
            </div>
        </div>
    )
}
