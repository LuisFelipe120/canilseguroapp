import './style.css';
import React from 'react';
import Avaliacao from '../../components/Avaliacao';
import Layout from '../../components/Layout';
import { getCanil, getComentarios } from '../requests/show';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const CardDetalhes = () => {
  const { id } = useParams();
  const { data: canis, isLoading: canisLoading } = useQuery(['getCanil', id], () => getCanil(id), {
    enabled: !!id,
  });

  // Consulta para buscar os comentários
  const { data: comentarios, isLoading: comentariosLoading } = useQuery(
    ['getComentarios', id],
    () => getComentarios(id),
    {
      enabled: !!id,
    }
  );

  // Verifica se os dados estão carregando
  if (canisLoading || comentariosLoading) {
    return <div>Carregando...</div>;
  }

  // Verifica se o canil foi encontrado
  if (!canis) {
    return <div>Canil não encontrado.</div>;
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
          <div className="comentarios">
            {comentarios?.length > 0 ? (
              comentarios.map((comentario) => (
                <div key={comentario.id} className="comentario">
                  <p><strong>Usuário:</strong> {comentario.usuarios_id}</p>
                  <p><strong>Avaliação:</strong> {comentario.Avaliacao_Usuario}</p>
                  <p><strong>Comentário:</strong> {comentario.comentarios}</p>
                </div>
              ))
            ) : (
              <p>Nenhum comentário encontrado.</p>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CardDetalhes;