import './style.css'
import Adulto from '../../assets/images/AdultoCaneCorso.png'
import Filhote from '../../assets/images/FilhoteCaneCorso.png'
import Vazio from '../../assets/images/favorite_Vazio.png'
import Avaliacao from '../../components/Avaliacao'
import React from 'react';

const CardCanilDetalhes = () => {
  return (
    <div>
      <section>
          <div className='box'>
            <h1 className='title'>Canil CaneCorsoOficial</h1>
            <br/>
            <p className='city'>Presidente Prudente, SP</p>
            <br/>
            <p className='contact'>CaneCorsoOficial@gmail.com</p>
            <br/>
            <a href='www.collieOficial.com.br' className='link'>www.CorsoOficial.com.br</a>
            <br/>
            <p className='text'>Canil CaneCorsoOficial, é um canil de <br/>
            raça pura, que preza qualidade e saúde <br/>
            da raça Cane Corso, afiliado a CBKC</p>
            <br/>
            <img src={Adulto}/>
            <br/>
            <img src={Filhote}/>
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
                <br/>
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

export default CardCanilDetalhes
