import React from 'react'
import './style.css'
import Layout from '../../components/Layout'
import { useCanisList } from '../../components/TarefasList/hook'


export const CardPage = () => {
  const { canis, canisLoading, handleClickDetails } = useCanisList();
  if (canisLoading  ) {
    return <div> carregando... </div>
  }

  return (
    <Layout>
      <section className='InformacoesAreaCard'>
        <ul >
          {canis.map((item, index) => (
            <li onClick={() => handleClickDetails(item.id)}  key={index}>

              <span>{item.canil}</span>
              <span >{item.endereco}</span>
              <span>{item.email}</span>            
              <span>
                {item.mensagem}
              </span>
              <span>
                <img src={item.img}/>
              </span>
              <span>{item.Avaliacao_Canil}</span>


            </li>
          ))}

        </ul>
      </section>
    </Layout>
  )
}

export default CardPage