import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import '../styles/Home.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Home = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [45, 55, 65, 85, 75, 95],
        backgroundColor: '#00B4FF', 
        borderRadius: 4,
      },
      {
        data: [30, 25, 45, 60, 40, 50],
        backgroundColor: '#222222', 
        borderRadius: 4,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { x: { grid: { display: false } }, y: { display: false } }
  };

  return (
    <div className="home-hero">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <h1 className="main-title">
              Datos que <br />
              <span className="text-pink">Hablan</span>, <br />
              Decisiones que <br />
              <span className="text-cyan">Impactan</span>.
            </h1>
            <p className="description">
              Potencia tu negocio con AR+ Analytics. Utilizamos algoritmos de IA de 
              vanguardia para convertir información en estrategia.
            </p>
            <div className="d-flex gap-3">
              <Button className="btn-cyan">Explorar Soluciones</Button>
              <Button className="btn-outline">Solicitar Demo</Button>
            </div>
          </Col>

          <Col lg={5} className="d-none d-lg-block">
            <div className="chart-container-dark">
              <p className="chart-header">RENDIMIENTO PREDICTIVO IA</p>
              <Bar data={data} options={options} />
            </div>
          </Col>        
        </Row>
      </Container>
      <section className="industry-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">IA Aplicada a tu Industria</h2>
          <Row className="columnas">
          
            <Col>
              <div className="industry-card">
                <div className="icon-box cyan-icon">🧠</div>
                <h3>Deep Learning</h3>
                <p>Analizamos patrones ocultos que el ojo humano ignora, anticipando tendencias.</p>
              </div>
            </Col>
        
            <Col>
              <div className="industry-card">
                <div className="icon-box pink-icon">🔍</div>
                <h3>Big Data Ready</h3>
                <p>Procesamiento masivo en tiempo real con escalabilidad ilimitada.</p>
              </div>
            </Col>
            
            <Col>
              <div className="industry-card">
                <div className="icon-box white-icon">🛡️</div>
                <h3>Ética y Seguridad</h3>
                <p>Modelos transparentes que cumplen con altos estándares de privacidad.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


    </div>

    
  );
};

export default Home;