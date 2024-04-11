import Layout from '../../components/Layout';
import './style.css';


import React from 'react'

const KennelClub = () => {
  return (
    <Layout>
    <div className='kennelContent'>
      <section className='tist'>
        <h1 className='title'>Vai até um kennel Clube</h1>
        <div className='container'>O que é um Kennel Clube?</div>
        <p className='information'>O Brasil Kennel Club é a entidade cinófila de maior tradição no território nacional.<br/>
        Fundado em 1922 e situado na Cidade do Rio de Janeiro, tem por finalidade congregar os cinófilos, cuidando dos interesses de todas <br/> 
        as raças caninas.
        <br/>
        <br/>
        Com mais de 100 anos de trabalho, amor e dedicação à cinofilia brasileira, o Brasil Kennel Club participa como membro<br/>
        da Confederação Brasileira de Cinofilia e da Federação Cinológica do Rio de Janeiro, promovendo o desenvolvimento cultural e desportivo,<br/>
        através de atividades que visem o aprimoramento das raças caninas.</p>
        <p className='mais'>Para mais informações acesse:</p>
        <a href='https://www.cbkc.org/' className='link'>https://www.cbkc.org/</a>
      </section>
    </div>
    </Layout>
  )
}

export default KennelClub
