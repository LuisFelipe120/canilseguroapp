import './styles.css';

import React from 'react'

const DocPack = () => {
  return (
    <div>
      <section className='tist'>
        <h1 className='title'>Documentação Pedigree</h1>
        <div className='container'>O que é Documentação Pedigree?</div>
        <p className='information'>O pedigree é o registro genealógico de um cão de raça pura.Ele é atribuído aos filhotes de dois cães, que já possuem pedigree, <br/>
        pelo canil filiado à CBKC onde nasceram. No documento, consta o nome do cão, sua raça, nome do criador, do canil, dos pais, data <br/>
        de nascimento e os dados de sua árvore genealógica até a terceira geração.</p>
        <p className='mais'>Para mais informações acesse:</p>
        <a href='https://www.cbkc.org/' className='link'>https://www.cbkc.org/</a>
      </section>
    </div>
  )
}

export default DocPack
