import './style.css';
import Dog from './images/Dog.png'
import dog from './images/Dogin.png'
import React from 'react';

const Home = () => {
  return (
    <div>
      <section className='linha'>
        <div className='box'>
          <h1 className='title'>Canil CollieEsporte</h1>
          <p className='city'>Presidente Prudente, SP</p>
          <p className='contact'>CollieEsporte@gmail.com</p>
          <a href='www.collieOficial.com.br' className='link'>www.collieOficial.com.br</a>
          <p className='text'>O Canil Collie Esporte, é um canil de <br/>
          raça pura Border Collie,afiliado com a <br/>
          cbkc com dez anos de qualidade</p>
          <img src={Dog}/>
          <img src={dog}/>
        </div>
      </section>
    </div>
  )
}

export default Home
