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
                        Racas_Classe_id: values.Racas_Classe_id,
                        nome: values.nome,
                        porte: values.porte,
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
                                <Field type='text' id='nome' name="nome" className='CadastroGeral' placeholder='Nome da Raça' />
                            </div>
                    </div>
                    <div className='UserAreaCadastro'>
                            <div className='InputAreaCadaster'>
                                <Field type='text' id='porte' name="porte" className='CadastroGeral' placeholder='Porte' />
                            </div>
                            </div>
                    <div className='UserAreaCadastro'>
                        <div className='InputAreaCadaster'>
                            <Field as='select' id='Grupo' name='Racas_Classe_id' className='CadastroGeral'>
                                <option value='' label='Selecione o Grupo' />
                                <option value='1' label='Pastoreio' />
                                <option value='2' label='Splitz e cao de caça' />
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