import React from 'react'

import styles from './SearchSorting.module.css';
import SortingFilter from './SortingFilter/SortingFilter';

import LineWeightIcon from '@mui/icons-material/LineWeight';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DnsIcon from '@mui/icons-material/Dns';

export default function SearchSorting() {
    return (
        <div className={styles.sort}>
            <div className={styles['sorting-by']}>
                <SortingFilter header={"Сортировка"} />
                <SortingFilter header={"Дата размещения"} />
            </div>

            <div className={styles['view']}>
                <div className={styles['view-block']}><DnsIcon/></div>
                <div className={styles['view-block']}><DragIndicatorIcon/></div>
                <div className={styles['view-block']}><LineWeightIcon/></div>
            </div>
        </div>
    )
}
