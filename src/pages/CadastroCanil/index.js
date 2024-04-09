import React from 'react'
import './../CadastroUsuario/style.css'
import { FaUser } from 'react-icons/fa';

const CadastroCanil = () => {
    return (
        <section className='CadastroArea'>
            <div className='FormularioArea'>
                <FaUser style={{ color: '#d6d6d6', paddingRight: '4px' }} />
                <h3>Preencha esse fomulario para cadastrar o canil</h3>
            </div>
            <form action='#'>

                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel' >Nome Completo do Canil</label>
                    <div className='InputArea'>
                        <input type='text' id='NomeCompletoCanil' className='CadastroGeral' placeholder='Nome Completo' />
                    </div>
                </div>
                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel'>Informações Canil</label>
                    <div className='InputArea'>
                        <input className='CadastroGeral' id='CadastroEmailCanil' type='text' placeholder='Canil e-mail' />
                    </div>
                    <div className='InputArea'>
                        <input className='CadastroGeral' id='EnderecoCanil' placeholder='Endereço Canil' type='text' />
                    </div>
                </div>
                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel'>Imagens do canil</label>
                    
                </div>
                <div className='UserAreaCadastro'>
                    <label className='InformacaoesLabel'>Mensagem Sobre o Canil</label>
                    <div className='InputArea'>
                        <input className='mensagemArea' id='MensagemCanil' type='text' placeholder='Digite sua mensagem' />
                    </div>
                </div>
                <div className='BotaoArea'>
                    <button className='BotaoCadastrar' id='BotaoCadastrar'>Cadastrar</button>
                </div>
            </form>

        </section>
    )
}

export default CadastroCanil