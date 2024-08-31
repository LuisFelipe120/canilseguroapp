import { Field, Form, Formik } from 'formik'
import { FaUser } from 'react-icons/fa';
import './../CadastroUsuario/style.css'
import Logo from '../../assets/images/CannilSeguro_Logo.png'
import React, { useState } from 'react'
import { initialCanil, useContextGlobal } from '../../context/PostContext'
import Avaliacao from '../../components/Avaliacao';
const CadastroCanil = () => {
    const { canis, addCanil } = useContextGlobal();
    const [previewImage, setPreviewImage] = useState(null);
    const [fileField, setFileField] = useState(null);
    const [fileKey, setFileKey] = useState(0);
    console.log(canis)
    const handleFileChange = (e) => {
        const file = e.target.files && e.target.files[0];
        setFileField(file)
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    return (
        <div className='formAreaCadaster'>
            <Formik
                initialValues={initialCanil}
                onSubmit={(values, actions) => {
                    const newCanil = {
                        canil: values.canil,
                        email: values.email,
                        endereco: values.endereco,
                        mensagem: values.mensagem,
                        img:previewImage,
                        file: fileField,
                        Usuarios_id: 3,
                        Avaliacao_Canil:0
                    }
                    addCanil(newCanil);
                    actions.setValues(
                        initialCanil
                    )
                    setPreviewImage(null)
                    setFileKey(fileKey + 1)
 
                }}
            >
                <Form method='post' encType='multipart/form-data'>
                    <section className='CadastroArea'>
 
 
 
                        <div className='LogoArea'>
                            <img className='imgLogoArea' src={Logo} />
                        </div>
 
                        <div className='FormularioArea'>
                            <FaUser style={{ color: '#d6d6d6', paddingRight: '4px' }} />
                            <h3>Preencha esse fomulario para cadastrar o canil</h3>
                        </div>
 
                        <div className='UserAreaCadastro'>
                            <div className='InputAreaCadaster'>
                                <Field type='text' id='NomeCompletoCanil' name='canil' className='CadastroGeral' placeholder='Nome Completo' />
                            </div>
                        </div>
                        <div className='UserAreaCadastro'>
                            <div className='InputAreaCadaster'>
                                <Field className='CadastroGeral' id='email' type='email' name='email' placeholder='email do canil' />
                            </div>
                            <div className='InputAreaCadaster'>
                                <Field className='CadastroGeral' id='EnderecoCanil' name='endereco' placeholder='Endereço do Canil' type='text' />
                            </div>
                        </div>
                        <div className='UserAreaCadastro'>
                            <label className='InformacaoesLabel'>Imagens do canil</label>
                            <div className='imgAreaCanil'>
                                {previewImage &&
                                    <img src={previewImage} alt='preview' className='imgPreview' />
                                }
                            </div>
                            <input className='inputField' id='img' name='img'
                                type='file' onChange={(e) => {
                                    handleFileChange(e)
 
                                }}
                                key={fileKey}
 
                            />
                        </div>
                        <div className='UserAreaCadastro'>
                            <label className='InformacaoesLabel'>Mensagem Sobre o Canil</label>
                            <div className='InputAreaCadaster'>
                                <Field  className='mensagemArea' as="textarea" id='MensagemCanil' name='mensagem' type='text' size={50} max-lenght={50}  placeholder='Digite sua mensagem'></Field>
                            </div>
                        </div>
                        <div className='BotaoAreaCadastroCanil'>
                            <button className='voltarCadastro' type='button' id='BotaoCadastrar'> <a href='/'>Voltar</a></button>
 
                            <button className='cadastrarUsuario' type='submit' id='BotaoCadastrar'>Cadastrar</button>
                        </div>
 
 
                    </section>
                </Form>
            </Formik>
        </div>
 
    )
}
 
export default CadastroCanil