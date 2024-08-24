import { Field, Form, Formik } from 'formik'
import { FaUser } from 'react-icons/fa';
import './../CadastroUsuario/style.css'
import Logo from '../../assets/images/CannilSeguro_Logo.png'
import React, { useState } from 'react'
import { initalCanil, useContextGlobal } from '../../context/PostContext'
const CadastroCanil = () => {
    const { canis, addCanil } = useContextGlobal();
    const [previewImages, setPreviewImages] = useState([]);
    const [fileKey, setFileKey] = useState(0);
    console.log(canis)
    const handleFileChange = (e) => {
        const files = e.target.files;
        const fileArray = Array.from(files);
        const filePreviews = [];

        fileArray.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                filePreviews.push(reader.result);
                if (filePreviews.length === fileArray.length) {
                    setPreviewImages(filePreviews);
                }
            };
            reader.readAsDataURL(file);
        });
    };


    return (
        <div className='formAreaCadaster'>
            <Formik
                initialValues={initalCanil}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'O email é obrigatório';
                    }
                    // Outras validações, se necessário
                    return errors;
                }}
                onSubmit={(values, actions) => {
                    console.log(values);

                    const newCanil = {
                        canil: values.canil,
                        email: values.email,
                        endereco: values.endereco,
                        mensagem: values.mensagem,
                        img: previewImages,

                    }
                    addCanil(newCanil);
                    actions.setValues(
                        initalCanil
                    )
                    setPreviewImages([]);
                    setFileKey(fileKey + 1);
                }}
            >
                <Form>
                    <section className='CadastroArea'>



                        <div className='LogoArea'>
                            <img className='imgLogoArea' src={Logo} />
                        </div>

                        <div className='FormularioArea'>
                            <FaUser style={{ color: '#d6d6d6', paddingRight: '4px' }} />
                            <h3>Preencha esse fomulario para cadastrar o canil</h3>
                        </div>

                        <div className='UserAreaCadastro'>
                            <div className='InputArea'>
                                <Field type='text' id='NomeCompletoCanil' name='canil' className='CadastroGeral' placeholder='Canil nome' />
                            </div>
                        </div>
                        <div className='UserAreaCadastro'>
                            <div className='InputAreaCadaster'>
                                <Field className='CadastroGeral' id='CadastroEmailCanil' type='email' name='email' placeholder='email do canil' />
                            </div>
                            <div className='InputAreaCadaster'>
                                <Field className='CadastroGeral' id='EnderecoCanil' name='endereco' placeholder='Endereço do Canil' type='text' />
                            </div>
                        </div>
                        <div className='UserAreaCadastro'>
                            <label className='InformacaoesLabel'>Imagens do canil</label>
                            <div className='imgAreaCanil'>
                                {previewImages.map((image, index) => (
                                    <img key={index} src={image} alt='preview' className='imgPreview' />
                                ))}
                            </div>
                            <input
                                className='inputField'
                                id='img'
                                name='img'
                                type='file'
                                onChange={handleFileChange}
                                multiple
                                key={fileKey} // Garante que o input seja reinicializado quando fileKey mudar
                            />
                        </div>
                        <div className='UserAreaCadastro'>
                            <label className='InformacaoesLabel'>Mensagem Sobre o Canil</label>
                            <div className='InputAreaCadaster'>
                                <Field className='mensagemArea' as="textarea" id='MensagemCanil' name='mensagem' type='text' size={50} max-lenght={50} placeholder='Digite sua mensagem'></Field>
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