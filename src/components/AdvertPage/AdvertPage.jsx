import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';


import styles from './AdvertPage.module.css';
import AdvertMain from './AdvertMain/AdvertMain';

function AdvertPage() {
    return (
        <Container sx={{ padding: "35px 0" }}>
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb" sx={{ background: "none" }}
                    separator={<NavigateNextIcon fontSize="small" />}>
                    <Link underline="hover" color="inherit" href="/">
                        Arent
                    </Link>
                    <Link
                        underline="hover" color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Аренда легковых автомобилей
                    </Link>
                    <Link
                        underline="hover" color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Москва
                    </Link>
                    <Link
                        underline="hover" color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        BMW
                    </Link>
                    <Link
                        underline="hover" color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        X5
                    </Link>
                    <Typography color="text.primary">Объявление 1241256</Typography>
                </Breadcrumbs>
            </div>

            <AdvertMain/>

        </Container>
    )
}

export default AdvertPage