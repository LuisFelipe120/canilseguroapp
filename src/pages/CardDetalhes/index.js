import './style.css'
import Dog from '../../assets/images/Dog.png'
import dog from '../../assets/images/Dogin.png'
import Vazio from '../../assets/images/favorite_Vazio.png'
import React from 'react';
import Avaliacao from '../../components/Avaliacao'

const CardDetalhes = () => {
  return (
    <div>
      <section>
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
            cbkc com dez anos de qualidade.</p>
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
  )
}

export default CardDetalhes
