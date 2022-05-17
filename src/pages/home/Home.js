import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './homeStyles.css';

function Home() {
  return (
    <Container className="homeContainer">
      <Card className="p-md-2">
        <h1>¡Bienvenido a nuestro sitio!</h1>
        <h4>Trabajo práctico final del curso de React js</h4>
      </Card>
    </Container>
  );
}

export default Home;
