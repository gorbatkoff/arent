import './App.css';
import Description from './components/Description/Description';
import Footer from './components/Footer/Footer';
import FooterLinks from './components/Footer/FooterLinks/FooterLinks';
import Header from './components/Header/Header';
import IndexContent from './components/IndexContent/IndexContent';
import Navbar from './components/Navbar/Navbar';
import Promo from './components/Promo/Promo';

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Description></Description>
      <Promo></Promo>
      <IndexContent></IndexContent>
      <Footer/>
    </div>
  );
}

export default App;
