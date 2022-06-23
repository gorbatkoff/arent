import React from 'react';
import Container from '@mui/material/Container';
import CollapsedBreadcrumbs from '../BreadCrumbs/BreadCrumbs';
import Title from '../Title/Title';

import styles from './Search.module.css';
import SearchMenu from './SearchMenu/SearchMenu';
import MarkList from './SearchMenu/MarkList/MarkList';
import AdList from './SearchMenu/AdList/AdList';

export default function Search() {
    return (
        <Container sx={{ padding: "35px 0" }}>
            <CollapsedBreadcrumbs/>
            <Title title={'Поиск объявлений в Москве'}/>
            <SearchMenu/>
            <AdList/>
            
        </Container>
    )
}
