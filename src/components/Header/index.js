import React from 'react'
import './style.css'
import Logo from './../../assets/images/isolado-feliz-sorridente-cao-fundo-branco-retrato-4.jpg'
import NavBar from '../NavBar'
import Pesquisar from '../Pesquisar'
const Header = () => {
  return (
        <div className='MenuNavegacao' >
            <div className='menuHamburger' >
            </div>
            <div className='logoConteiner'>
                <img className='logo' src={Logo} />
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