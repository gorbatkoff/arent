import { React, useState, useEffect } from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import { createTheme, colors, ThemeProvider, Button } from '@mui/material';
import { styled } from '@mui/system';

import './App.css';

import AdvertPage from './components/AdvertPage/AdvertPage';
import CreateAdvert from './components/CreateAdvert/CreateAdvert';
import Description from './components/Description/Description';
import Footer from './components/Footer/Footer';
import FooterLinks from './components/Footer/FooterLinks/FooterLinks';
import Header from './components/Header/Header';
import IndexContent from './components/IndexContent/IndexContent';
import Navbar from './components/Navbar/Navbar';
import MyAdvert from './components/MyAdvert/MyAdvert';
import ProfileEditing from './components/ProfileEditing/ProfileEditing';
import Promo from './components/Promo/Promo';
import Search from './components/Search/Search';
import SearchMenu from './components/Search/SearchMenu/SearchMenu';
import Profile from './components/Profile/Profile';
import Wallet from './components/Wallet/Wallet';
import Booking from './components/Booking/Booking';
import Title from './components/Title/Title';
import { color, Container } from '@mui/system';

import axios from 'axios';
import BasicButton from './UI/Button/BasicButton';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2962ff",
    }
  },
  typography: {
    button: {
      textTransform: "none",
      fontSize: "16px",
      lineHeight: "200%",
      marginRight: "1em",
      // height: "40px",
    }
  }
})



function App() {

  const [token, setToken] = useState('');
  const [allAdverts, setAllAdverts] = useState([]);
  const [marks, setMarks] = useState({});

  const api = axios.create({
    baseURL: 'http://62.113.113.106/api'
  });



  const getAdverts = async () => { // function of gettings adverts

    try {
      const response = await api.get(`/ad/all_ads/`);

      setAllAdverts(response.data);

    }

    catch (err) {
      console.log(err);
    }
  };

  const getMarksOfAuto = async () => { // function of gettings adverts

    try {
      const response = await api.get(`/ad/cars/`);

      setMarks(response.data);

    }

    catch (err) {
      console.log(err);
    }
  };

  // console.log(allAdverts);
  // console.log(marks);
  // console.log("Token from App.js >>> " + token)

  useEffect(() => {
    getAdverts()
    getMarksOfAuto()
  }, [])


  return (

    <div>
      <ThemeProvider theme={theme}>
        <Header setToken={setToken} />
        <Navbar />

        <Routes>
          <Route path="/" element={[
            <Container>
              <Title title="Легковые автомобили в Москве"></Title><p style={{ fontWeight: '400', color: '#78839E', fontSize: '16px', paddingBottom: "1em" }}>7 532 предложения</p>
            </Container>,
            <Promo />,
            <IndexContent />]} />

          <Route path="/create" element={<CreateAdvert allMarks={marks} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/advert" element={<AdvertPage />} />
          <Route path="/advert/:id" element={<AdvertPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-advert" element={<MyAdvert />} />
          <Route path="/edit" element={<ProfileEditing />} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
