import React from 'react'
import './style.css'
import Logo from './../../assets/images/isolado-feliz-sorridente-cao-fundo-branco-retrato-4.jpg'
import Pesquisar from '../Pesquisar'
const Header = () => {
  return (
    <div className='conteudo'>
            <div className='menuHamburguer' >
                <h1>Luis</h1>
            </div>
            <div className='logoConteiner'>
                <img src={Logo} />
            </div>
            <div className='cidade' >
                <Pesquisar/>
            </div>
            <div className='login' >
                <button className='botaoLogin'>
                    Login
                </button>
                
            </div>
        </div>
    )
}

export default Header