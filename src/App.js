import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { LangContext } from './context/LangContext';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
// import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Announcements from './pages/announcements/Announcements';
import './App.css'

function App() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  return (
    <Router>
      <div data-theme={theme} lang={lang.toLowerCase()} className='website-container'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
