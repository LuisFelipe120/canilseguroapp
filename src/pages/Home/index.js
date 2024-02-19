import './style.css';
import React from 'react'
import '../Sobre'

const Home = () => {
  return (
    <body>
      <header>
        
        <div className='loginArea'>
          <h1 >LOGIN</h1>

        </div>
      </header>
      
      <main>
        <div id='emailArea'>
          <h2>E-MAIL</h2>
          <input placeholder='DIGITE SEU E-MAIL:' type="cadastro" id='inputEmail'></input>
        </div>

        <div id='senhaArea'>
          <h2>SENHA</h2>
          <input placeholder='DIGITE SUA SENHA:' type="password" id='inputSenha'></input>
        </div>

        <div className='esqSenha'>
          <button id='esqSenha'>ESQUECEU A SENHA</button>
          <a href="sobre">
  <button id='avancar' type="/">AVANÇAR</button></a>

          <a id='azul' href="cadastro">LOGIN OU CADASTRE-SE</a>
        </div>
      </main>

     
    </body>
    
  )
}

export default Home