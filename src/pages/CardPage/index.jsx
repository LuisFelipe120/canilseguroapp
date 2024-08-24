import React from 'react'
import './style.css'
import Layout from '../../components/Layout'
import { useCanisList } from './hook'
import Avaliacao from '../../components/Avaliacao'
import { useContextGlobal } from '../../context/PostContext'


export const CardPage = () => {
  const { searchcontext } = useContextGlobal();

  const { canis, canisLoading, handleClickDetails } = useCanisList();
  if (canisLoading  ) {
    return <div> carregando... </div>
  }

  const normalizedSearchTerm = (searchcontext || '').toLowerCase();


  const filteredCanis = Array.isArray(canis)
    ? canis.filter((canil) =>
        canil.endereco.toLowerCase().includes(normalizedSearchTerm)
      )
    : [];
  
  return (
    <Layout>
      <section className='InformacoesAreaCard'>
        <ul style={{ cursor: "pointer" }}>
          {filteredCanis.length > 0 ? (
            filteredCanis.map((item, index) => (
              <li onClick={() => handleClickDetails(item.id)} key={index}>
                <span>{item.canil}</span>
                <span>{item.endereco}</span>
                <span>{item.email}</span>
                <span>{item.mensagem}</span>
                <span>
                  <img src={item.img} alt={`Imagem de ${item.canil}`} />
                </span>
                <span><Avaliacao valor={item.Avaliacao_Canil} /></span>
              </li>
            ))
          ) : (
            <p>Nenhum canil encontrado para o endereço pesquisado.</p>
          )}
        </ul>
      </section>
    </Layout>
  )
}

export default CardPage