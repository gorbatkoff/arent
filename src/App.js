import { React, useState, useEffect } from 'react';

import { Routes, Route, Link } from 'react-router-dom';

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
import { Container } from '@mui/system';

import axios from 'axios';

function App() {

  const [allAdverts, setAllAdverts] = useState([]);
  const [token, setToken] = useState('');

  const api = axios.create({
    baseURL: 'http://62.113.113.106/api/'
  });


  const getAdverts = async () => { // function of gettings adverts
    const response = await api.get(`all_ads/`);

    try {
      setAllAdverts(response.data);

      console.log(allAdverts);
    }

    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAdverts();
  }, []);

  return (

    <div>
      {/* Страница: Main  */}

      {/* <Header></Header> */}
      {/* <Navbar></Navbar>
      <Container>
        <Title title="Легковые автомобили в Москве"></Title><p style={{ fontWeight: '400', color: '#78839E', fontSize: '16px', paddingBottom: "1em" }}>7 532 предложения</p>
      </Container>
      <Promo></Promo>
      <IndexContent></IndexContent>
      <Footer /> */}

      {/* Страница: Search */}

      {/* <Header></Header>
      <Navbar></Navbar>
      <Search/>
      <Footer /> */}

      {/* Страница: Advert Page */}

      {/* <Header></Header> */}
      {/* <Navbar></Navbar>
      <AdvertPage />
      <Footer /> */}

      {/* Страница: CreateAdvert */}
      {/* <Header></Header>
      <Navbar></Navbar>
      <CreateAdvert/> 
      <Footer /> */}

      {/* Страница: ProfileEditing */}
      {/* <Header></Header>
      <Navbar></Navbar>
      <ProfileEditing /> */}

      {/* Страница MyAdvert */}
      {/* <Header></Header>
      <Navbar></Navbar>
      <MyAdvert/>
      <Footer /> */}

      {/* Страница Profile */}
      {/* <Header></Header>
      <Navbar></Navbar>
      <Profile /> */}

      {/* Страница Wallet */}
      {/* <Header></Header>
      <Navbar></Navbar>
      <Wallet />
      <Footer />  */}

      {/* Страница Booking */}
      {/* <Header></Header>
      <Navbar></Navbar>
      <Booking />
      <Footer /> */}

      <Routes>
        <Route path="/" element={[
          <Container>
            <Title title="Легковые автомобили в Москве"></Title><p style={{ fontWeight: '400', color: '#78839E', fontSize: '16px', paddingBottom: "1em" }}>7 532 предложения</p>
          </Container>,
          <Promo />,
          <IndexContent />]} />

          <Route path="/create" element={<CreateAdvert/>} />
          <Route path="/advert" element={<AdvertPage/>} />
          <Route path="/advert/:id" element={<AdvertPage/>} />
      </Routes>

    </div>
  );
}

export default App;
