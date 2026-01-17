import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-page">
      <Container>
        <Row className="align-items-center min-vh-100">
        
          <Col lg={6} className="text-start mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">
              Hablemos de tu <br />
              <span className="text-cyan">Proyecto</span>.
            </h1>
            <p className="description-text mb-5">
              Nuestro equipo de científicos de datos e ingenieros de IA 
              están listos para ayudarte a desbloquear el potencial oculto 
              de tu información.
            </p>

            <div className="contact-info-list">
              <div className="info-item d-flex align-items-center mb-4">
                <div className="info-icon">🧭<i className="bi bi-geo-alt"></i></div>
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Oficinas Centrales</h6>
                  <p className="mb-0 text-secondary">Paseo de la Reforma 222, Valparaiso,</p>
                </div>
              </div>

              <div className="info-item d-flex align-items-center mb-4">
                <div className="info-icon">📩<i className="bi bi-envelope"></i></div>
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Consultas Generales</h6>
                  <p className="mb-0 text-secondary">contacto@arplus-analytics.com</p>
                </div>
              </div>

              <div className="info-item d-flex align-items-center">
                <div className="info-icon">📞<i className="bi bi-telephone"></i></div>
                <div className="ms-3">
                  <h6 className="mb-0 fw-bold">Soporte 24/7</h6>
                  <p className="mb-0 text-secondary">+52 (55) 8888-9999</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Columna del Formulario a la Derecha */}
          <Col lg={6}>
            <div className="form-container-glass p-5">
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="small-label">NOMBRE COMPLETO</Form.Label>
                      <Form.Control type="text" placeholder="John Doe" className="input-dark" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="small-label">EMPRESA</Form.Label>
                      <Form.Control type="text" placeholder="Tech Corp" className="input-dark" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label className="small-label">TU MENSAJE O REQUERIMIENTO</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Cuéntanos un poco sobre tus datos y objetivos..." 
                    className="input-dark" 
                  />
                </Form.Group>

                <Button className="btn-send-contact w-100 py-3 fw-bold">
                  ENVIAR SOLICITUD <i className="bi bi-arrow-right ms-2"></i>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;