import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import WhatsAppWidget from './components/WhatsAppWidget';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import AppNavbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import SobreIA from './pages/SobreIA';
import Contacto from './pages/Contacto';  
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="bg-black min-vh-100 d-flex flex-column">
        <AppNavbar />
        <WhatsAppWidget />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
          
            <Route path="/SobreIA" element={<SobreIA />} />

            <Route path="/contacto" element={<Contacto />} />

            <Route path="/Login" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;