import React from 'react'
import './style.css'
import { FaUser} from 'react-icons/fa';

const CadastroUsuario = () => {
    return (
            <section className='CadastroArea'>
                <div className='FormularioArea'>
                    <FaUser style={{color:'#d6d6d6', paddingRight:'4px'}}/>
                    <h3>Preencha esse fomulario</h3>
                </div>
                <form action='#'>

                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel' >Nome Completo</label>
                    <div className='InputArea'>
                        <input type='text' id='NomeCompleto' className='CadastroGeral' placeholder='Nome Completo' />
                    </div>
                </div>
                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel'>Email</label>
                    <div className='InputArea'>
                        <input className='CadastroGeral' id='CadastroEmail' type='text' placeholder='E-mail' />
                    </div>
                    <div className='InputArea'>
                        <input className='CadastroGeral' id='ConfirmacaoEmail' placeholder='E-mail de Confirmação' type='text' />
                    </div>
                </div>
                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel'>Senha</label>
                    <div className='InputArea'>
                        <input className='CadastroGeral' id='CadastroSenha' type='password' placeholder='Senha' />
                    </div>
                    <div className='InputArea'>
                        <input className='CadastroGeral' id='ConfirmacaoSenha' type='password' placeholder='Confirme sua Senha' />
                    </div>
                </div>
                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel'>CPF</label>
                    <div className='InputArea'>
                    <input className='CadastroGeral' id='CPF' type='text' placeholder='CPF' />
                    </div>
                </div>
                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel'>Numero de Celular</label>
                    <div className='InputArea'>
                    <input className='CadastroGeral' id='NumeroCelular' type='number' placeholder='(00) 00000-0000' />
                    </div>
                </div>
                <div className='BotaoArea'>
                <button className='BotaoCadastrar' id='BotaoCadastrar'>Cadastrar</button>
                </div>
                </form>

            </section>
    )
}

export default CadastroUsuario