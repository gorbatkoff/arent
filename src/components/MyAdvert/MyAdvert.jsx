import React from 'react'
import { Container } from '@mui/material'
import Title from '../Title/Title'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import styles from './MyAdvert.module.css'
import Draft from '../Draft/Draft';

export default function MyAdvert() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Container sx={{ padding: "35px 0 250px 0" }}>
            <Title title='Мои объявления' />
            <div>
                <Box sx={{ width: 'fit-content', typography: 'body1', background: "#F5F8FD", margin: "20px 0" }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Все" value="1" />
                                <Tab label="Легковые" value="2" />
                                <Tab label="Коммерческие" value="3" />
                                <Tab label="Мото" value="4" />
                                <Tab label="Электромобили" value="5" />
                                <Tab label="Водный транспорт" value="6" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Draft title="BMW x5 2002 xDrive M50d AT BASE" description="Описание объявления (при наличии) Значимость этих проблем настолько" price="2500" />
                            <Draft title="BMW x5 2002 xDrive M50d AT BASE" description="Описание объявления (при наличии) Значимость этих проблем настолько" price="2500" />
                        </TabPanel>

                        <TabPanel value="2">
                            <Draft title="BMW x5 2002 xDrive M50d AT BASE" description="Описание объявления (при наличии) Значимость этих проблем настолько" price="2500" />
                        </TabPanel>

                        <TabPanel value="3">
                            <Draft title="BMW x5 2002 xDrive M50d AT BASE" description="Описание объявления (при наличии) Значимость этих проблем настолько" price="2500" />
                        </TabPanel>

                        <TabPanel value="4">
                            <Draft title="BMW x5 2002 xDrive M50d AT BASE" description="Описание объявления (при наличии) Значимость этих проблем настолько" price="2500" />
                        </TabPanel>

                        <TabPanel value="5">
                            <Draft title="BMW x5 2002 xDrive M50d AT BASE" description="Описание объявления (при наличии) Значимость этих проблем настолько" price="2500" />
                        </TabPanel>

                        <TabPanel value="6">
                            <Draft title="BMW x5 2002 xDrive M50d AT BASE" description="Описание объявления (при наличии) Значимость этих проблем настолько" price="2500" />
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </Container>
    )
}
