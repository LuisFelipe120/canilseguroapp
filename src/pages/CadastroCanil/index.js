import { Field, Form, Formik } from 'formik'
import { FaUser } from 'react-icons/fa';
import './../CadastroUsuario/style.css'

import React from 'react'
import { initialUser, useContextGlobal } from '../../context/PostContext'
const CadastroCanil = () => {
    const { users, addUser } = useContextGlobal();
    return (
        <div className='formArea'>
            <Formik
                initialValues={initialUser}
                onSubmit={(values, actions) => {
                    const newUser = {
                        id: users[users.length - 1]?.id ? users[users.length - 1]?.id + 1 : 1,
                        nome: values.nomeCompletoCanil,
                        email: values.CadastroEmailCanil,
                        endereco: values.EnderecoCanil,
                        mensagem: values.MensagemCanil,
                        
                        
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
                <h3>Preencha esse fomulario para cadastrar o canil</h3>
            </div>

                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel' >Nome Completo do Canil</label>
                    <div className='InputArea'>
                        <Field type='text' id='NomeCompletoCanil' className='CadastroGeral' placeholder='Nome Completo' />
                    </div>
                </div>
                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel'>Informações Canil</label>
                    <div className='InputArea'>
                        <Field className='CadastroGeral' id='CadastroEmailCanil' type='text' placeholder='Canil e-mail' />
                    </div>
                    <div className='InputArea'>
                        <Field className='CadastroGeral' id='EnderecoCanil' placeholder='Endereço Canil' type='text' />
                    </div>
                </div>
                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel'>Imagens do canil</label>
                    
                </div>
                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel'>Mensagem Sobre o Canil</label>
                    <div className='InputArea'>
                        <Field className='mensagemArea' id='MensagemCanil' type='text' placeholder='Digite sua mensagem' />
                    </div>
                </div>
                <div className='BotaoArea'>
                    <button className='BotaoCadastrar' type='submit' id='BotaoCadastrar'>Cadastrar</button>
                </div>
            

        </section>
        </Form>
            </Formik>
        </div>

    )
}

export default CadastroCanil