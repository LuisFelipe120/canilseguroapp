import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Painel.css'; // CSS para estilizar o painel

const Painel = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    // Navegar para a home
    navigate('/');
  };

  return (
    <div className="painel-container">
      <h1>Logado com sucesso.</h1>
      <div className="painel-actions">
        <button onClick={handleGoHome} className="go-home-button">
          Ir para Home
        </button>
      </div>
    </div>
  );
};

export default Painel;