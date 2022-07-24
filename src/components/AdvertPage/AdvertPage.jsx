import React from 'react'

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';

import axios from 'axios';

import styles from './AdvertPage.module.css';

import AdvertMain from './AdvertMain/AdvertMain';

function AdvertPage() {
    const id = useParams();

    const [advert, setAdvert] = useState({});

    const api = axios.create({
        baseURL: `http://62.113.113.106/api/ad/update/${id.id}`
    });

    const getAdvertInfo = async () => {

        try {
            let req = await api.get("", {
                headers: {
                    Authorization: "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjYzNDYxMTEzfQ.-KkcQauImg1MSba4p8Swo2diSuXo6Fhb99siFwUWMW4"
                }
            })

            setAdvert(req.data);
            console.log(req.data);

        }

        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAdvertInfo();
    }, []);



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
                    <Typography color="text.primary">Объявление {id.id}</Typography>
                </Breadcrumbs>
            </div>

            <AdvertMain advert={advert}/>

        </Container>
    )
}

export default AdvertPage