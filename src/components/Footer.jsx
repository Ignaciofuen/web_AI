import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-dark">
      <Container>
        <Row className="gy-4">
          <Col lg={4}>
            <div className="footer-brand">
              <span className="brand-dot"></span> AR+ <span className="text-muted">SYSTEMS</span>
            </div>
            <p className="footer-text">
              Transformamos datos complejos en decisiones inteligentes mediante el poder 
              de la Inteligencia Artificial generativa y predictiva.
            </p>
          </Col>

          <Col md={2}>
            <h6>PLATAFORMA</h6>
            <ul className="footer-links">
              <li>Análisis Predictivo</li>
              <li>Visión Artificial</li>
              <li>NLP Avanzado</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6>COMPAÑÍA</h6>
            <ul className="footer-links">
              <li>Sobre Nosotros</li>
              <li>Carreras</li>
              <li>Legal</li>
            </ul>
          </Col>

          <Col lg={4}>
            <h6>NEWSLETTER</h6>
            <p className="small">Suscríbete para recibir noticias sobre IA.</p>
            <div className="newsletter-box">
              <Form.Control type="email" placeholder="Email" className="input-dark" />
              <Button className="btn-send">
                <i className="bi bi-send-fill">✈</i>
              </Button>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom text-center">
          <small>&copy; 2026 AR+ Systems Analytics</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;