import React from 'react'
import './style.css'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
<div className='FooterArea'>
    <div className='linkFooterArea'>
    <div className='linkArea'>
        <p>
            <a href='Sobre'><u>Sobre o Canil Seguro</u></a>

        </p>
    </div>  
    <div className='linkArea'>
        <p>
           <a href='https://cbkc.org/'><u>Confederação Brasileira de Cinifolia</u></a> 
        </p>
    </div>  
    </div>
   
    <div className='redesSocias'>
    
    
    <ul class="wrapper">
      <li class="icon facebook">
        <span class="tooltip">Facebook</span>
        <span><i class="fab fa-facebook-f"> <FaFacebook size='2em'/></i></span>
      </li>
      <li class="icon twitter">
        <span class="tooltip">Twitter</span>
        <span><i class="fab fa-twitter"><FaTwitter size='2em'/></i></span>
      </li>
      <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <span><i class="fab fa-instagram"><FaInstagram size='2em'/></i></span>
      </li>
      <li class="icon github">
        <span class="tooltip">Github</span>
        <span><i class="fab fa-github"><FaGithub size='2em'/></i></span>
      </li>
      <li class="icon youtube">
        <span class="tooltip">Youtube</span>
        <span><i class="fab fa-youtube"><FaYoutube size='2em'/></i></span>
      </li>
    </ul>
    </div>
</div>
  )
}

export default Footer