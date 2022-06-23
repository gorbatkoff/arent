import './App.css';
import Description from './components/Description/Description';
import Footer from './components/Footer/Footer';
import FooterLinks from './components/Footer/FooterLinks/FooterLinks';
import Header from './components/Header/Header';
import IndexContent from './components/IndexContent/IndexContent';
import Navbar from './components/Navbar/Navbar';
import Promo from './components/Promo/Promo';
import Search from './components/Search/Search';
import SearchMenu from './components/Search/SearchMenu/SearchMenu';

function App() {
  return (
    <div>
      {/* Main 
              <Header></Header>
      <Navbar></Navbar>
      <Description></Description>
      <Promo></Promo>
      <IndexContent></IndexContent>
      <Footer/>      
      
      */}

      {/* Search */}

      <Header></Header>
      <Navbar></Navbar>
      <Search/>
      <Footer />
    </div>
  );
}

export default App;
