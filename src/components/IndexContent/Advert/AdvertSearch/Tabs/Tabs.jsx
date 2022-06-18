import * as React from 'react';

import styles from './Tabs.module.css';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import brand1 from '../../../../../images/brands/img1.svg'; //img1.svg
import brand2 from '../../../../../images/brands/img2.svg'; //img1.svg
import brand3 from '../../../../../images/brands/img3.svg'; //img1.svg
import brand4 from '../../../../../images/brands/img4.svg'; //img1.svg
import brand5 from '../../../../../images/brands/img5.svg'; //img1.svg
import brand6 from '../../../../../images/brands/img6.svg'; //img1.svg
import brand7 from '../../../../../images/brands/img7.svg'; //img1.svg
import brand8 from '../../../../../images/brands/img8.svg'; //img1.svg
import brand9 from '../../../../../images/brands/img9.svg'; //img1.svg
import brand10 from '../../../../../images/brands/img10.svg'; //img1.svg

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Марка" value="1" />
            <Tab label="Кузов" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" className={styles.brands}>
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
          <img src={brand6} alt="" />
          <img src={brand7} alt="" />
          <img src={brand8} alt="" />
          <img src={brand9} alt="" />
          <img src={brand10} alt="" />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}
