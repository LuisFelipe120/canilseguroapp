import React from 'react'
import './style.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
<div className='FooterArea'>
    <div className='SobreCanilArea'>
        <p>
            Sobre o Canil Seguro
        </p>
    </div>  
    <div className='linkCBKC'>
        <p>
            Confederação Brasileira de Cinifolia
        </p>
    </div>  
    <div className='redesSocias'>
    <FaFacebook /> 
    <FaInstagram /> 
    <FaTwitter /> 

    </div>
    </div>
  )
}

export default Footer