import React from 'react'
import './style.css'
import Logo from './../../assets/images/isolado-feliz-sorridente-cao-fundo-branco-retrato-4.jpg'
import NavBar from '../NavBar'
const Header = () => {
  return (
        <div className='MenuNavegacao' >
            <div className='menuHamburger' >
            </div>
            <div className='logoConteiner'>
                <img className='logo' src={Logo} />
            </div>
            <div className='cidade' >
                <h1>Teste1</h1>
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