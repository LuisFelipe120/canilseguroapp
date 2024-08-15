import React from "react";
import './styles.css';
import Layout from "../../components/Layout";

function Login() {
    return(
        <Layout>
           <div className="completeArea">
            <form className="formArea">
            <div className="inputArea">
                <h2>USUÁRIO</h2>
            </div>  

            <div>
            <input type="text" placeholder="Digite seu e-mail" className="inputLogin"></input> 
            </div>
            
            <div className="textArea">
                <h2>SENHA</h2>
            </div>

            <div>
                <input type="text and number" placeholder="Digite sua senha" className="InputSenha"></input>
            </div>

            <div className="cadastro">
            <a href="cadastrousuario" className="login1">Cadastre-se</a>
            </div>
            
            <div className="pagodito">
            <a href="CadastroUsuario" className="senhitaEsquecita">Esqueceu a senha?</a>
            </div>

            

            <div>
                <button className="botao1">AVANÇAR</button>
            </div>
          
            </form>
           
            </div>
        </Layout>
    )
}
export default Login