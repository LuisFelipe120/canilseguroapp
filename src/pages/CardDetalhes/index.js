import './style.css'
import Dog from '../../assets/images/Dog.png'
import dog from '../../assets/images/Dogin.png'
import Vazio from '../../assets/images/favorite_Vazio.png'
import User from '../../assets/images/face_scan.png'
import React from 'react';

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
              <img src={User}></img>
              <div class="estrelas">
                <input type="radio" id="cm_star-empty" name="fb" value="" checked />
                <label for="cm_star-1"><i class="fa"></i></label>
                <input type="radio" id="cm_star-1" name="fb" value="1" />
                <label for="cm_star-2"><i class="fa"></i></label>
                <input type="radio" id="cm_star-2" name="fb" value="2" />
                <label for="cm_star-3"><i class="fa"></i></label>
                <input type="radio" id="cm_star-3" name="fb" value="3" />
              </div>
            </div>

            <div id='bord'>
              <div className='bord'>
                <p className='canil'>Avaliar este Canil</p>
                <div class="rating">
                  <input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
                  <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
                  <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
                  <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
                  <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
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
