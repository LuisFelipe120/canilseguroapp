import { Field, Form, Formik } from 'formik'
import { FaUser } from 'react-icons/fa';
import Logo from '../../assets/images/CannilSeguro_Logo.png';
import React from 'react'
import { initialRace, useContextGlobal } from '../../context/PostContext'
import { useRacasList } from './hook';
import { useCanisList } from '../CardPage/hook';
const CadastrarRacas = () => {
    const { races, addRace } = useContextGlobal();
    const { racas =[], classes =[] } = useRacasList();
    const { canis = [] } = useCanisList();

    return (
        <div className='formAreaCadaster'>
            <Formik
                initialValues={initialRace}
                onSubmit={(values, actions) => {
                    console.log(values)
                    const newRaces = {
                        canil_id: values.canil_id,
                        Racas_Racas_Classe_id: values.Racas_Racas_Classe_id,
                        Racas_id: values.Racas_id

                    }
                    addRace(newRaces);
                    actions.setValues(
                        initialRace
                    )
                }}
            >
                <Form>
                    <section className='CadastroArea'>
                        <div className='LogoArea'>
                            <img className='imgLogoArea' src={Logo} />
                        </div>

                        <div className='FormularioArea'>
                            <FaUser style={{ color: '#d6d6d6', paddingRight: '4px' }} />
                            <h3>Preencha esse fomulario</h3>
                        </div>


                        <div className='UserAreaCadastro'>
                            <div className='InputAreaCadaster'>
                                <label htmlFor="canil">Escolha o Canil</label>
                                <Field as='select' id='canil_id' name='canil_id' className='CadastroGeral'>
                                    <option value="">Selecione o canil</option>
                                    {canis.map(canil => (
                                        <option key={canil.id} value={canil.id}>
                                            {canil?.canil}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                        </div>
                         <div className='InputAreaCadaster'>
                            <Field as='select' id='Racas_Racas_Classe_id' name='Racas_Racas_Classe_id' className='CadastroGeral'>
                            <option value="">Selecione o grupo</option>
                                    {classes.map(classes => (
                                        <option key={classes.id} value={classes.id}>
                                            {classes?.descricao}
                                        </option>
                                    ))}
                            </Field>
                        </div>
                        <div className='UserAreaCadastro'>
                            <div className='InputAreaCadaster'>
                                <Field as='select' id='Racas_id' name='Racas_id' className='CadastroGeral'>
                                <option value="">Selecione a raca</option>
                                    {racas.map(racas => (
                                        <option key={racas.id} value={racas.id}>
                                            {racas?.nome} - {racas?.porte}
                                        </option>
                                       
                                    ))}
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