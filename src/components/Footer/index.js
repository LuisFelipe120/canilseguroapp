import React from 'react'
import './style.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
<div className='FooterArea'>
    <div className='linkFooterArea'>
    <div className='linkArea'>
        <p>
            <a href='#'>Sobre o Canil Seguro</a>
        </p>
    </div>  
    <div className='linkArea'>
        <p>
           <a href='https://cbkc.org/'>Confederação Brasileira de Cinifolia</a> 
        </p>
    </div>  
    </div>
   
    <div className='redesSocias'>
    
    
    
    <a href='#'><div className='IconeRedes'><FaFacebook /></div> </a>
    <a href='#'><div className='IconeRedes'><FaInstagram /> </div></a>
    <a href='#'><div className='IconeRedes'><FaTwitter /> </div></a>
    </div>
</div>
  )
}

export default Footer