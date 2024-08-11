import React, { useState } from "react";
import './styles.css';
import Layout from "../../components/Layout";
import api from "../../services/api";

const Login = () => {
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })
    const [logado, setlogado] = useState(
        false

    )
    const [erroLogin, setErroLogin] = useState(
        false

    )

    const handleChange = (e) => {
        setDados({ ...dados, [e.target.name]: e.target.value })
    }

    const handleCadastrar = (e) => {
        e.preventDefault();
        api.post('/login', dados).then(data => {
            console.log(data)
            if (!data.data) {
                setErroLogin(true)
                return
            }
            setErroLogin(false)
            setlogado(true)
            return
            //painel
        }
        )
    }
    return (
        <Layout>
            <div className="completeArea">
                <form method="post" onSubmit={handleCadastrar} className="formArea">
                    <div className="inputArea">
                        <label>
                            Usuarios
                            <input type="email" name="email" onChange={handleChange} value={dados.email}  placeholder="Digite seu e-mail" className="inputLogin" />
                        </label>
                    </div>

                    <div className="textArea">
                        <label>
                            Senha
                            <input type="password" name="senha" onChange={handleChange} value={dados.senha} placeholder="Digite sua senha" className="InputSenha" />

                        </label>
                    </div>
                    {erroLogin && <span>usuario e senha invalido</span>}
                    <div>
                    <button type="submit" className="botao1">AVANÇAR</button>
                </div>
                <div className="AreaUsuario">
                <div className="cadastroLogin">
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