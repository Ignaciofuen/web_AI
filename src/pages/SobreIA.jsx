import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/SobreIA.css';
import iaImage from '../assets/imagen-Ai.png';

const SobreIA = () => {
  return (
    <div className="sobre-ia-page">
      
      <section className="ia-header text-center py-5">
        <Container>
          <h1 className="display-3 fw-bold mb-4">
            ¿Qué es el Análisis de Datos <br /> con <span className="text-cyan">IA?</span>
          </h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '800px' }}>
            Más allá de simples gráficos y hojas de cálculo, la Inteligencia Artificial 
            revoluciona cómo comprendemos la realidad del negocio.
          </p>
        </Container>
      </section>

    
      <section className="ia-transition py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="accent-line mb-3"></div>
              <h2 className="mb-4">Del Análisis Descriptivo al Prescriptivo</h2>
              <p className="text-secondary mb-4">
                Tradicionalmente, el análisis de datos nos decía <strong>qué pasó</strong>. 
                Con la IA de AR+, pasamos al análisis predictivo (<strong>qué pasará</strong>) 
                y prescriptivo (<strong>qué debemos hacer</strong>).
              </p>
              <ul className="list-unstyled ia-list">
                <li><i className="bi bi-check2 text-cyan"></i> Automatización de limpieza de datos.</li>
                <li><i className="bi bi-check2 text-cyan"></i> Detección de anomalías en tiempo real.</li>
                <li><i className="bi bi-check2 text-cyan"></i> Generación de insights automáticos.</li>
              </ul>
            </Col>
            <Col lg={6}>
              <div className="image-container-ia">
                <img 
                    src={iaImage} 
                    alt="IA Dashboard Analytics" 
                    className="img-fluid ia-main-img" 
                    />
                </div>
            </Col>
          </Row>
        </Container>    
      </section>

    
      <section className="ia-pilares py-5 text-center">
        <Container>
          <h2 className="section-subtitle mb-5"><u>Los 3 Pilares de AR+</u></h2>
          <Row className="gy-4">
            <Col md={4}>
              <Card className="pilar-card">
                <Card.Body>
                  <h3>1. Comprensión</h3>
                  <p>Usamos NLP para entender datos no estructurados como correos, chats y documentos legales.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="pilar-card">
                <Card.Body>
                  <h3>2. Predicción</h3>
                  <p>Modelos estocásticos que proyectan escenarios futuros con un margen de error mínimo.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="pilar-card">
                <Card.Body>
                  <h3>3. Acción</h3>
                  <p>Integración con APIs para que la IA no solo analice, sino que ejecute cambios automáticamente.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección: Arquitectura de Siguiente Nivel */}
      <section className="ia-arquitectura py-5">
        <Container>
          <div className="arquitectura-card text-center p-5">
            <div className="cpu-icon mb-4">
              <i className="bi bi-cpu text-cyan fs-1"></i>
            </div>
            <h2 className="mb-4">Arquitectura de Siguiente Nivel</h2>
            <p className="fst-italic text-secondary mb-4">
              "Nuestra red neuronal propietaria ha sido entrenada con más de 10TB de datos 
              específicos de industria, garantizando una precisión superior a cualquier modelo 
              genérico del mercado."
            </p>
            <p className="text-cyan small fw-bold">- Dr. Alex Rivera, Director de IA en AR+</p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SobreIA;