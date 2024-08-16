import { Field, Form, Formik } from 'formik'
import { FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/CannilSeguro_Logo.png';
 
import React from 'react'
import { initialRace, useContextGlobal } from '../../context/PostContext'
const CadastrarRacas = () => {
   
 
    const { races, addRaces } = useContextGlobal();
    console.log(races)
    return (
        <div className='formAreaCadaster'>
            <Formik
                initialValues={initialRace}
                onSubmit={(values, actions) => {
                    const newRaces = {
 
                        id: Date.now(), // Gerar um ID único com base no timestamp
                        canilEmail: values.canilEmail,
                        nome: values.nome,
                        grupo: values.grupo
                    }
                    addRaces(newRaces);
                    actions.setValues(
                        initialRace
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
                            <Field className='CadastroGeral' id='CadastroEmail' name="email" type='text' placeholder='E-mail' />
                        </div>
                    </div>
                    <div className='UserAreaCadastro'>
                            <div className='InputAreaCadaster'>
                                <Field type='text' id='NomeRaca' name="nome" className='CadastroGeral' placeholder='Nome da Raça' />
                            </div>
                    </div>
                    <div className='UserAreaCadastro'>
                        <div className='InputAreaCadaster'>
                            <Field as='select' id='Grupo' name='grupo' className='CadastroGeral'>
                                <option value='' label='Selecione o Grupo' />
                                <option value='Grupo A' label='Grupo A' />
                                <option value='Grupo B' label='Grupo B' />
                            </Field>
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
 
export default CadastrarRacas