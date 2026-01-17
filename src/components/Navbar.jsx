import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button ,NavDropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import '../styles/Navbar.css'

const AppNavbar = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/login');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;



  return (
    <Navbar expand="lg" variant="dark" className={scrolled ? 'scrolled' : 'navbar-transparent'}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-3">
          <span className="text-info">AR+</span> ANALYTICS
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to="/" end className="mx-2">INICIO</Nav.Link>
            <Nav.Link as={NavLink} to="/SobreIA" className="mx-2">SOBRE IA</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" className="mx-2">CONTACTO</Nav.Link>
            {user ? (
              
              <NavDropdown title={`HOLA, ${user.nombre.toUpperCase()}`} id="user-dropdown" className="ms-3 fw-bold">
                <NavDropdown.Item onClick={handleLogout}>
                  CERRAR SESIÓN
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              
              <Button 
                variant="light" 
                className="rounded-pill px-4 ms-3 fw-bold"
                onClick={() => navigate('/login')}
              >
                INGRESAR
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;