import Layout from '../../components/Layout';
import './styles.css';

import React from 'react'

const DocPack = () => {
  return (
    <Layout>
    <div className='docContent'>
      <section className='tist'>
          <h1 className='titleDock'>Documentação Pedigree</h1>
          <div className='containerDock'>O que é Documentação Pedigree?</div>
            <p className='informationDock'>O pedigree é o registro genealógico de um cão de raça pura.Ele é atribuído aos filhotes de dois cães, que já possuem pedigree, <br />
              pelo canil filiado à CBKC onde nasceram. No documento, consta o nome do cão, sua raça, nome do criador, do canil, dos pais, data <br />
              de nascimento e os dados de sua árvore genealógica até a terceira geração.</p>
            <p className='maisDock'>Para mais informações acesse:</p>
            <a href='https://www.cbkc.org/' className='redirection'>https://www.cbkc.org/</a>
      </section>
    </div>
    </Layout>
  )
}

export default DocPack
