import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Registro.css';

const Registro = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    
    if (!nombre || !email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      
      const nuevoUsuario = {
        nombre: nombre,
        email: email,
        password: password 
      };

    
      localStorage.setItem('usuario_arplus', JSON.stringify(nuevoUsuario));
      
      alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión.");
      navigate('/login'); 
    } catch (err) {
      setError("Error al guardar los datos en el navegador.");
    }
  };

  return (
    <div className="register-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={5}>
            <Card className="register-card p-4 shadow-lg">
              <Card.Body>
                <div className="text-center mb-4">
                  <h2 className="register-title">Crear Cuenta</h2>
                  <p className="text-secondary small">Únete a la plataforma de AR+</p>
                </div>

                {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}

                <Form onSubmit={handleRegister}>
                  <Form.Group className="mb-3">
                    <Form.Label className="register-label">NOMBRE COMPLETO</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Juan Pérez" 
                      className="register-input"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="register-label">CORREO ELECTRÓNICO</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="usuario@arplus.com" 
                      className="register-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="register-label">CONTRASEÑA</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="••••••••" 
                      className="register-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="register-label">CONFIRMAR CONTRASEÑA</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="••••••••" 
                      className="register-input"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button className="btn-register w-100 mb-3 fw-bold" type="submit">
                    REGISTRARME
                  </Button>
                </Form>

                <div className="text-center mt-3">
                  <p className="small text-secondary">
                    ¿Ya tienes una cuenta? <Link to="/login" className="text-cyan text-decoration-none fw-bold">Inicia Sesión</Link>
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

export default Registro;