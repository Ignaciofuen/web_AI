import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext'; // Importación vital para conectar con el estado global
import '../styles/Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError("Por favor, ingresa tus credenciales.");
      return;
    }

    setLoading(true);

    
    setTimeout(() => {
      const resultado = login(email, password);

      if (resultado.success) {
      
        navigate('/'); 
      } else {
        setError(resultado.message);
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={5} lg={4}>
            <Card className="login-card p-4 shadow-lg border-0">
              <Card.Body>
                <div className="text-center mb-4">
                  <h2 className="login-title">Ingresar</h2>
                  <p className="text-secondary small">Panel Predictivo AR+</p>
                </div>

                {error && <Alert variant="danger" className="py-2 small text-center">{error}</Alert>}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="login-label">CORREO ELECTRÓNICO</Form.Label>
                    <Form.Control 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="usuario@arplus.com" 
                      className="login-input"
                      required 
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="login-label">CONTRASEÑA</Form.Label>
                    <Form.Control 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••" 
                      className="login-input"
                      required 
                    />
                  </Form.Group>

                  <Button 
                    variant="light" 
                    className="w-100 fw-bold py-2 rounded-pill" 
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? <Spinner animation="border" size="sm" /> : "INICIAR SESIÓN"}
                  </Button>
                </Form>
                
                <div className="text-center mt-4">
                  <p className="small text-secondary">
                    ¿No tienes cuenta? <Link to="/registro" className="text-info text-decoration-none fw-bold">Regístrate gratis</Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;