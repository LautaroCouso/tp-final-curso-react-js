import './App.css';
import PublicRoutes from './routes/public/PublicRoutes';
import React from 'react';
import './globalStyles/globalStyles.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <PublicRoutes />
      <Footer />
    </div>
  );
}

export default App;
