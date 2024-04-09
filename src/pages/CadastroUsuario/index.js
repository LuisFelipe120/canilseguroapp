import { Field, Form, Formik } from 'formik'
import { FaUser } from 'react-icons/fa';

import React from 'react'
import { initialUser, useContextGlobal } from '../../context/PostContext'
const FormPost = () => {
    const { users, addUser } = useContextGlobal();
    return (
        <div className='formArea'>
            <Formik
                initialValues={initialUser}
                onSubmit={(values, actions) => {
                    const newUser = {
                        id: users[users.length - 1]?.id ? users[users.length - 1]?.id + 1 : 1,
                        nome: values.nomeCompleto,
                        email: values.CadastroEmail,
                        senha: values.CadastroSenha,
                        cpf: values.CPF,
                        numero: values.NumeroCelular
                    }
                    addUser(newUser);
                    actions.setValues(
                        initialUser
                    )
                }}
            >
                <Form>
                <section className='CadastroArea'>
                    <div className='FormularioArea'>
                        <FaUser style={{ color: '#d6d6d6', paddingRight: '4px' }} />
                        <h3>Preencha esse fomulario</h3>
                    </div>


                    <div className='UserAreaCadastro'>
                        <label className='InformacaoesLabel' >Nome Completo</label>
                        <div className='InputArea'>
                            <Field type='text' id='NomeCompleto' className='CadastroGeral' placeholder='Nome Completo' />
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <label className='InformacaoesLabel'>Email</label>
                        <div className='InputArea'>
                            <Field className='CadastroGeral' id='CadastroEmail' type='text' placeholder='E-mail' />
                        </div>
                        <div className='InputArea'>
                            <Field className='CadastroGeral' id='ConfirmacaoEmail' placeholder='E-mail de Confirmação' type='text' />
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <label className='InformacaoesLabel'>Senha</label>
                        <div className='InputArea'>
                            <Field className='CadastroGeral' id='CadastroSenha' type='password' placeholder='Senha' />
                        </div>
                        <div className='InputArea'>
                            <Field className='CadastroGeral' id='ConfirmacaoSenha' type='password' placeholder='Confirme sua Senha' />
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <label className='InformacaoesLabel'>CPF</label>
                        <div className='InputArea'>
                            <Field className='CadastroGeral' id='CPF' type='text' placeholder='CPF' />
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <label className='InformacaoesLabel'>Numero de Celular</label>
                        <div className='InputArea'>
                            <Field className='CadastroGeral' id='NumeroCelular' type='number' placeholder='(00) 00000-0000' />
                        </div>
                    </div>
                    <div className='BotaoArea'>
                        <button className='BotaoCadastrar' id='BotaoCadastrar'>Cadastrar</button>
                    </div>


                </section>
                </Form>
            </Formik>
        </div>

    )
}

export default FormPost