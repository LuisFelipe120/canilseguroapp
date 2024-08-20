import './style.css'
import Dog from '../../assets/images/Dog.png'
import dog from '../../assets/images/Dogin.png'
import Vazio from '../../assets/images/favorite_Vazio.png'
import React from 'react';
import Avaliacao from '../../components/Avaliacao'
import Layout from '../../components/Layout';

const CardDetalhes = () => {
  return (
    <Layout>
    <div>
      <section>
          <div className='box'>
            <h1 className='title'></h1>
            <br/>
            <p className='city'></p>
            <br/>
            <p className='contact'></p>
            <br/>
            <br/>
            <p className='text'></p>
            <br/>
            <img src={Dog}/>
            <br/>
            <img src={dog}/>
            <br/>
            <div className='inb'>

                <div className='box1'>
                  <p>Favoritos</p>
                </div>
                
                <div className='box2'>
                  <img src={Vazio}></img>
                </div>
 
            </div>
            <br/>
            <div className='geralAvali'>
              <p className='avali'>Avaliações Geral</p>
              <br/>
              <div className='starGeral'>
                <Avaliacao/>
              </div>
            </div>

            <div id='bord'>
              <div className='bord'>
                <p className='canil'>Avaliar este Canil</p>
                <br />
                <div className='starGeralLast'>
                  <Avaliacao/>
                </div>
              </div>
              <div className='confirm'>
                <input id type="text" className='userInput' placeholder='Escrever Texto...'/>
                <br/>
                <button className='botao'>Confirmar</button>
              </div>
              <br/>
            </div>

          </div>
      </section>
    </div>
    </Layout>
  )
}

export default CardDetalhes
