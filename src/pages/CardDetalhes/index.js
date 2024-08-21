import './style.css';
import React from 'react';
import Avaliacao from '../../components/Avaliacao';
import Layout from '../../components/Layout';
import { getCanil } from '../requests/show';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const CardDetalhes = () => {
  const { id } = useParams();
  const { data: canis, isLoading } = useQuery(['getCanil', { id }], getCanil, {
    enabled: !!id,
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <Layout>
      <div className="card-detalhes">
        <section className="canil-info">
          <h2>{canis?.canil}</h2>
          <p>{canis?.endereco}</p>
          <p>{canis?.email}</p>
          <p>{canis?.mensagem}</p>
          {canis?.img && (
            <div className="canil-image">
              <img src={canis?.img} alt={`Imagem de ${canis?.canil}`} />
            </div>
          )}
          <p className="avaliacao-canil">Avaliação: {canis?.Avaliacao_Canil}</p>
        </section>

        <section id="bord" className="avaliacao-section">
          <div className="bord">
            <h3 className="canil">Avaliar este Canil</h3>
            <div className="starGeralLast">
              <Avaliacao />
            </div>
          </div>
          <div className="confirm">
            <form method='post'>
            <input
              type="text"
              className="userInput"
              placeholder="Escrever Texto..."
            />
            <button className="botao" type='submit'>Confirmar</button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CardDetalhes;