import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
