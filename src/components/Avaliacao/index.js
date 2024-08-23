import React from 'react';
import './style.css'; // Arquivo CSS para as estrelas

const Avaliacao = ({ valor }) => {
  return (
    <div className="avaliacao">
      {[1, 2, 3, 4, 5].map((estrela) => (
        <span
          key={estrela}
          className={`estrela ${estrela <= valor ? 'checked' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Avaliacao;