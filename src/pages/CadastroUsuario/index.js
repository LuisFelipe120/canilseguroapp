import { Field, Form, Formik } from 'formik'
import { FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/CannilSeguro_Logo.png';
 
import React from 'react'
import { initialUser, useContextGlobal } from '../../context/PostContext'
const CadastroUsuario = () => {
   
 
    const { users, addUser } = useContextGlobal();
    console.log(users)
    return (
        <div className='formAreaCadaster'>
            <Formik
                initialValues={initialUser}
                onSubmit={(values, actions) => {
                    const newUser = {
 
                        id: users[users.length - 1]?.id ? users[users.length - 1]?.id + 1 : 1,
                        nome: values.nome,
                        email: values.email,
                        senha: values.senha,
                        cpf: values.cpf,
                        numero: values.numero
                    }
                    addUser(newUser);
                    actions.setValues(
                        initialUser
                    )
                }}
            >
                <Form>
                <section className='CadastroArea'>
                <div className='LogoArea'>
                            <img  className='imgLogoArea' src={Logo}/>
                        </div>
 
                    <div className='FormularioArea'>
                        <FaUser style={{ color: '#d6d6d6', paddingRight: '4px' }} />
                        <h3>Preencha esse fomulario</h3>
                    </div>
 
 
                    <div className='UserAreaCadastro'>
                        <div className='InputAreaCadaster'>
                            <Field type='text' id='NomeCompleto' name="nome"  className='CadastroGeral' placeholder='Nome Completo' />
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <div className='InputAreaCadaster'>
                            <Field className='CadastroGeral' id='CadastroEmail' name="email" type='text' placeholder='E-mail' />
                        </div>
                        <div className='InputAreaCadaster'>
                            <input className='CadastroGeral' id='ConfirmacaoEmail'  placeholder='E-mail de Confirmação' type='email' />
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <div className='InputAreaCadester'>
                            <Field className='CadastroGeral' id='CadastroSenha' name="senha" type='password' placeholder='Senha' />
                        </div>
                        <div className='InputAreaCadaster'>
                            <input className='CadastroGeral' id='ConfirmacaoSenha' type='password' placeholder='Confirme sua Senha' />
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <div className='InputAreaCadaster'>
                            <Field className='CadastroGeral' id='CPF' type='text' placeholder='CPF' name="cpf"/>
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <div className='InputAreaCadaster'>
                            <Field className='CadastroGeral' id='NumeroCelular' type='number' placeholder='(00) 00000-0000' name="numero" />
                        </div>
                    </div>
                    <div className='BotaoAreaCadastro'>
                    <button className='voltarCadastro' type='button' id='BotaoCadastrar'> <a href='/'>Voltar</a></button>
 
                        <button className='cadastrarUsuario' type='submit' id='BotaoCadastrar'>Cadastrar</button>
                    </div>
 
 
                </section>
                </Form>
            </Formik>
        </div>
 
    )
}
 
export default CadastroUsuario