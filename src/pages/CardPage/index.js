import React from 'react'
import './style.css'
import Layout from '../../components/Layout'
import Avaliacao from '../../components/Avaliacao'
 
const CardPage = () => {
  return (
    <div>
      <Layout>
        <div className='bordaArea'>
        <section className='CardArea'>

          <div className='InformacoesArea'>
            <div className='TituloCanil'>
            <a href='/CardDetalhes'>
              <h1>Canil CollieEsporte</h1>
            </a>
            </div>
            <div className='InformacaoCanil'>
              <h3>Presidente Prudente</h3>
            </div>
            <div className='InformacaoCanil'>
              <h3>CollieOficial@gmail.com</h3>
            </div >
            <div className='InformacaoCanil'>
              <h3>www.collieOficial.com.br</h3>
              </div>
              <div className='textoAreaCanil'>
                <p>
                  O Canil Collie Esporte, é um canil de raça pura, Border Collie, afiliado com a CBKC, com dez anos de qualidade
                </p>
              </div>
              <div className='TituloAvaliacao'>
                <h1>Avaliações Gerais</h1>
              </div>
              <div className='ComponenteAvaliacaoArea'>
                <Avaliacao/>
              </div>
            </div>

        </section>

        <section className='CardArea'> 
          <div className='InformacoesArea'>
          <div className='TituloCanil'>
            <a href='/CaneCorso'>
              <h1>Canil CaneCorsoOficial</h1>
            </a>
            </div>
          <div className='InformacaoCanil'>
            <h3>Presidente Prudente</h3>
          </div>
          <div className='InformacaoCanil'>
            <h3>canecorsooficial@gmail.com</h3>
          </div >
          <div className='InformacaoCanil'>
            <h3>www.canecorsooficial.com.br</h3>
            </div>
            <div className='textoAreaCanil'>
              <p>
                O canil Cane Corso Oficial, é um canil de raça pura, que preza qualidade e saúde da raça Cane Corso, afiliado a CBKC
              </p>
            </div>
            <div>
              <div className='TituloAvaliacao'>
              <h1>Avaliações Gerais</h1>
              </div>
              <div className='ComponenteAvaliacaoArea'>
                <Avaliacao/>
            </div>
            </div>
          


        </div></section>
        </div>
      </Layout>
    </div>
  )
}

export default CardPage