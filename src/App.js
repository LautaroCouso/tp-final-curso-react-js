import './App.css';
import PublicRoutes from './routes/public/PublicRoutes';
import React from 'react';
import './globalStyles/globalStyles.css';
import Footer from './components/footer/Footer';
import Menu from './components/menu';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Container className="container-md mainContainer">
          <PublicRoutes />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
