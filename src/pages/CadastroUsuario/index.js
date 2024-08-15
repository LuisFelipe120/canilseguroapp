import { ErrorMessage, Field, Form, Formik } from 'formik'
import { FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/CannilSeguro_Logo.png';
 
import React from 'react'
import { initialUser, useContextGlobal } from '../../context/PostContext'
const validateRequired = (value) => {
    let error;
    if (!value) {
        error = 'Campo obrigatório';
    }
    return error;
};

const CadastroUsuario = () => {
    
     
    const { users, addUser } = useContextGlobal();
    console.log(users)

    return (
        <div className='formArea'>
            <Formik 
    
                initialValues={initialUser}
                onSubmit={(values, actions,) => {
                    const newUser = {
                        nome: values.nome,
                        email: values.email,
                        senha: values.senha,
                        cpf: values.cpf,
                        numero: values.numero,
                       emailConfirmacao: values.emailConfirmacao,
                       senhaConfirmacao: values.senhaConfirmacao
                    }
                    addUser(newUser);
                    actions.setValues(
                        initialUser
                    )
                    actions.setFieldValue('emailConfirmacao', '');
                    actions.setFieldValue('senhaConfirmacao', '');
                }}
            >
                 {({ errors, touched }) => (
                <Form > 
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
                            {errors.nome && touched.nome && <div className="error">{errors.nome}</div>}
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <div className='InputArea'>
                            <Field className='CadastroGeral' id='CadastroEmail' name="email" type='text' placeholder='E-mail'  validate={validateRequired} />
                            {errors.email && touched.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div className='InputArea'>
                            <Field className='CadastroGeral' id='ConfirmacaoEmail'  name="emailConfirmacao" placeholder='E-mail de Confirmação'  type='email'/>
                            {errors.emailConfirmacao && touched.emailConfirmacao && <div className="error">{errors.emailConfirmacao}</div>}
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <div className='InputArea'>
                            <Field className='CadastroGeral' id='CadastroSenha'  name="senha" type='password' placeholder='Senha' />
                            {errors.senha && touched.senha && <div className="error">{errors.senha}</div>}
                        </div>
                        <div className='InputArea'>
                            <Field className='CadastroGeral' id='ConfirmacaoSenha' name="senhaConfirmacao"  type='password' placeholder='Confirme sua Senha' />
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <div className='InputArea'>
                            <Field className='CadastroGeral' id='CPF' type='text'  placeholder='CPF' name="cpf"/>
                            {errors.cpf && touched.cpf && <div className="error">{errors.cpf}</div>}
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <div className='InputAreaCadaster'>
                            <Field className='CadastroGeral' id='NumeroCelular' type='number' placeholder='(00) 00000-0000' name="numero" />
                            {errors.numero && touched.numero && <div className="error">{errors.numero}</div>}
                        </div>
                    </div>
                    <div className='BotaoAreaCadastro'>
                    <button className='voltarCadastro' type='button' id='BotaoCadastrar'> <a href='/'>Voltar</a></button>
 
                        <button className='cadastrarUsuario' type='submit' id='BotaoCadastrar'>Cadastrar</button>
                    </div>
 
 
                </section>
                </Form>
                 )}
            </Formik>
        </div>
 
    )
}
 
export default CadastroUsuario