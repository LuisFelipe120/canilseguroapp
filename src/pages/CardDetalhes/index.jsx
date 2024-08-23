import './style.css';
import React, { useState } from 'react';
import Avaliacao from '../../components/Avaliacao';
import Layout from '../../components/Layout';
import { getCanil, getComentarios } from '../requests/show';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const CardDetalhes = () => {
  const [dados, setDados] = useState({});

  const { id } = useParams();
  const { data: canis, isLoading: canisLoading } = useQuery(['getCanil', {id}],  getCanil, {
    enabled: !!id,
  });

  // Consulta para buscar os comentários
  const { data: comentarios, isLoading: comentariosLoading } = useQuery(
    ['getComentarios', {id}],
    getComentarios,
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



  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleCadastrar = (e) => {
    e.preventDefault();
  
      // Criar novo comentário
      api.post('/comentarios', dados)
        .then(res => {
          console.log('Comentário enviado com sucesso:', res.data);
          // Limpar o formulário
          setDados({});
          // Recarregar ou atualizar a lista de comentários
        })
        .catch(error => {
          console.error('Erro ao enviar comentário:', error);
        });
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
          <p className="avaliacao-canil">Avaliação: <Avaliacao valor={canis?.Avaliacao_Canil} /></p>
        </section>

        <section id="bord" className="avaliacao-section">
          <div className="bord">
            <h3 className="canil">Avaliar este Canil</h3>
            </div>
          <div className="confirm">
            <form method='post' onSubmit={handleCadastrar}>
              <input type='number' placeholder='avaliacao' className='userInput' name='Avaliacao_Usuario' onChange={handleChange}/>
            <input
              type="text"
              className="userInput"
              onChange={handleChange}
              name='comentarios'
              placeholder="Escrever Texto..."
            />
            <button className="botao" type='button'>Confirmar</button>
            </form>
          </div>
          <div className="comentarios">
            {comentarios?.length > 0 ? (
              comentarios.map((comentario) => (
                <div key={comentario.id} className="comentario">
                  <p><strong>Usuário:</strong> {comentario.usuarios_id}</p>
                  <p><strong>Avaliação:</strong> <Avaliacao valor={comentario.Avaliacao_Usuario }/></p>
                  <p><strong>Comentário:</strong> {comentario.comentarios}</p>
                  <button>Apagar</button>
                  <button>Editar</button> {/* Botão de editar */}
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