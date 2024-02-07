import './style.css';
import Dog from './images/Dog.png'
import dog from './images/Dogin.png'
import favorito from './images/favorito.png'
import React from 'react';

const Home = () => {
  return (
    <div>
      <section className='linha'>
        <div className='box'>
          <h1 className='title'>Canil CollieEsporte</h1>
          <br/>
          <p className='city'>Presidente Prudente, SP</p>
          <br/>
          <p className='contact'>CollieEsporte@gmail.com</p>
          <br/>
          <a href='www.collieOficial.com.br' className='link'>www.collieOficial.com.br</a>
          <br/>
          <p className='text'>O Canil Collie Esporte, é um canil de <br/>
          raça pura Border Collie,afiliado com a <br/>
          cbkc com dez anos de qualidade</p>
          <br/>
          <img src={Dog}/>
          <br/>
          <img src={dog}/>
          <br/>
          <div className='inb'>
            <p className='favory'>Favoritos</p>
          </div>
          <br/>
          <p className='avali'>Avaliações Geral</p>
          <br/>
          <div id='bord'>
            <div className='bord'>
              <p id='avali'>Avaliar Geral</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
