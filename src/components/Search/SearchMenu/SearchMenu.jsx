import React from 'react';
import Button from '@mui/material/Button';

import styles from './SearchMenu.module.css';
import SearchFilter from './SearchFilter/SearchFilter';
import BasicButton from '../../../UI/Button/BasicButton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import MarkList from './MarkList/MarkList';
import RangeFilter from './RangeFilter/RangeFilter';
import SearchSorting from './SearchSorting/SearchSorting';

export default function SearchMenu() {
    return (
        <div className={styles['search-menu']}>
            <div className={styles.menu}>
                <div className={styles['menu-filters']}>
                    <SearchFilter label='Марка' />
                    <SearchFilter label='Модель' />
                    <SearchFilter label='Поколение' />
                    <div className={styles['inline-filter']}>
                        <SearchFilter label='Кузов' />
                        <SearchFilter label='КПП' />
                    </div>

                    <div className={styles['inline-filter']}>
                        <SearchFilter label='Двигатель' />
                        <SearchFilter label='Привод' />
                    </div>

                    <div className={styles['inline-filter']}>
                        <SearchFilter label='Объём от, л' />
                        <SearchFilter label='До' />
                    </div>

                    <div className={styles['inline-filter']}>
                        <SearchFilter label='Год от' />
                        <SearchFilter label='До' />
                    </div>

                    <div className={styles['inline-filter']}>
                        {/* <SearchFilter label='Дата аренды' /> */}
                        <input type="date" className={styles["date-control"]} placeholder="Дата аренды" />
                        <SearchFilter label='По часам' />
                    </div>

                    <div className={styles['inline-filter']}>
                        <SearchFilter label='Цена от, ₽' />
                        <SearchFilter label='До' />
                    </div>
                </div>


                <div className={styles['reset-and-show']}>
                    <div className={styles.filters}>
                        <div className={styles.all}>
                            <div>Все фильтры</div>
                            <ExpandMoreIcon />
                        </div>
                        <div className={styles.reset}>
                            <div>Сбросить фильтры</div>
                            <CloseIcon />
                        </div>
                    </div>

                    <div className={styles.show}>

                        <BasicButton text={"Показать 7 532 предложений"} />
                    </div>
                </div>
            </div>

            <MarkList/>
            <RangeFilter/>
            <SearchSorting/>

            
        </div>
    )
}

{/* <Button variant="contained" sx={{background: '#316BFE'}}>Показать 7 533 предложений</Button> */ }