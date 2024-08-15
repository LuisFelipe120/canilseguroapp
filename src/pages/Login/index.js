import React, { useState } from "react";
import './styles.css';
import Layout from "../../components/Layout";
import api from "../../services/api";
import { useContextGlobal } from "../../context/PostContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })
  
    const {logado, setLogado} = useContextGlobal()
    const [erroLogin, setErroLogin] = useState(
        false

    )
    const handleChange = (e) => {
        setDados({ ...dados, [e.target.name]: e.target.value })
    }
    console.log(logado)
    const handleCadastrar = (e) => {
        e.preventDefault();
        api.post('/login', dados).then(data => {
            console.log(data)
            if (!data.data) { 
                setErroLogin(true)
                setLogado(false)
                return
            }
            setErroLogin(false)
            setLogado(true)
            navigate('/painel')
            return
        }
        )
    }
    return (
        <Layout>
            <div className="completeAreaLogin">
                <form method="post" onSubmit={handleCadastrar} className="formAreaLogin">
                    <div className="inputAreaLogin">
                        <label>
                            Usuarios
                            <input type="email" name="email" onChange={handleChange} value={dados.email}  placeholder="Digite seu e-mail" className="inputLoginArea" />
                        </label>
                    </div>
                    <div className="textAreaLogin">
                        <label>
                            Senha
                            <input type="password" name="senha" onChange={handleChange} value={dados.senha} placeholder="Digite sua senha" className="InputSenhaLogin" />
                        </label>
                    </div>
                    {erroLogin && <span>usuario e senha invalido</span>}
                    <div>
                    <button type="submit" className="botao1">AVANÇAR</button>
                </div>
                <div className="AreaUsuarioLogin">
                <div className="cadastroLoginArea">
                    <a href="/usuarios">Cadastre-se</a>
                </div>
                <div className="pagodito">
                    <a href="#" className="senhitaEsquecita">Esqueceu a senha?</a>
                </div>
                </div>

                </form>

               


                

            </div>
        </Layout>
    )
}
export default Login