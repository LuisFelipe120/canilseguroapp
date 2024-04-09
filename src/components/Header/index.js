import React from 'react'
import './style.css'
import Logo from './../../assets/images/isolado-feliz-sorridente-cao-fundo-branco-retrato-4.jpg'
import Pesquisar from '../Pesquisar'
import { FaUser } from 'react-icons/fa';
import NavBar from '../NavBar';

const Header = () => {
  return (
    <div className='conteudo'>
            <div className='menuHamburguer' >
            <NavBar/>
            </div>
            <div className='logoConteiner'>
               <a href='/'><img  src={Logo} /></a> 
            </div>
            <div className='cidade' >
                <Pesquisar/>
            </div>
            <div className='login' >
                
                <button className='botaoLogin'>
                    <a href='#'>
                <FaUser style={{color:'WHITE', paddingRight:'10px', fontSize:'30px', paddingTop:'10px',}}/> Login
                </a>
                </button>
                
            </div>
        </div>
    )
}

export default Header