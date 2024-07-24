import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Home from './components/Home';
import Footer from './components/Footer';
import OtroMainContent from './components/OtroMainContent';


export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<OtroMainContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

