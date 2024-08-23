import React from 'react'
import './style.css'
import Logo from './../../assets/images/CannilSeguro_Logo.png'
import Pesquisar from '../Pesquisar'
import { FaUser } from 'react-icons/fa';
import NavBar from '../NavBar';
import { useContextGlobal } from '../../context/PostContext';

const Header = () => {
    const { searchcontext, setSearchContext} = useContextGlobal();

    const handleSearchChange = (e) => {
      setSearchContext(e.target.value);
    };
    
  
  return (
    <div className='conteudo'>
            <div className='logoConteiner'>
               <a href='/'><img  src={Logo} /></a> 
            </div>
            <div className='menuHamburguer' >
            <NavBar/>
            </div>

            <div className='cidade' >
            <input
        type="text"
        placeholder="Pesquisar por endereço"
        value={searchcontext}
        onChange={handleSearchChange}
      />
            </div>
           
            <div className='login' >
            
                    
                <button className='botaoLogin'>    
                    <a href='/login' style={{paddingBottom:'8px', fontSize:'25px', paddingRight:'10px',}}>
                    <FaUser  style={{color:'WHITE', paddingRight:'10px', fontSize:'30px', paddingTop:'11px',}}/>Login
                </a>
                </button>
                
            </div>
        </div>
    )
}

export default Header