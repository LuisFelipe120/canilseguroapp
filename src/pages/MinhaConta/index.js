import React from 'react'
import Avaliacao from '../../components/Avaliacao'
import './style.css'
import Layout from '../../components/Layout'
const MinhaConta = () => {
    return (

        <form action='#'>
            <Layout>

                <section className='UserContent'>
                    <div className='UserArea'>
                        <div className='NomeUserArea'><h2>Luis</h2></div>
                        <div className='ImagemUser'></div>
                        <div className='NomeArea'>
                            <label className='InformcaoesLabel'>Nome</label>
                            <input className='InformacoesArea' id='InformacaoArea' type='text' />
                        </div>
                        <div className='NomeArea'>
                            <label className='InformcaoesLabel'>Numero</label>
                            <input className='InformacoesArea' id='InformacoesArea' type='text' />
                        </div>
                        <div className='NomeArea'>
                            <label className='InformcaoesLabel'>Email</label>
                            <input className='InformacoesArea' id='InformacoesArea' type='text' />
                        </div>
                        <div className='BotaoArea'>
                            <button className='BotaoAtualizar' id='BotaoAtualizar'>Atualizar</button>
                        </div>
                    </div>

                </section>
                <section className='FavoritosArea'>
                    <div>
                        <div className='FavoritosCaixa'>
                            <h2>Favoritos:</h2></div>
                        <div className='favoritosNome'>
                            <h3>Collie Esporte</h3>
                            <button className='BotaoRemover' id='BotaoRemover'>Remover</button>
                        </div>
                        <div className='BotaoArea'>
                            <button className='BotaoAtualizar' id='BotaoAtualizar'>Atualizar</button>
                        </div>
                    </div>
                </section>

                <section className='ControleAvaliacao'>
                    <div className='ControleArea'>

                        <div className='FavoritosCaixa'>
                            <h2>Suas Avaliações:</h2>
                        </div>
                        <div className='nomeUserAvaliacao'>
                            <h4>Luis</h4>
                        </div>
                        <div className='nomeAvaliacao'>
                            <Avaliacao />
                        </div>
                        <div>
                            <input className='AvaliacaoArea' id='AvaliacaoArea' />
                        </div>
                        <div className='BotaoArea'><button className='BotaoAtualizar' id='BotaoAtualizar'>Atualizar</button>
                        </div>
                    </div>
                </section>
            </Layout>

        </form>

    )
}

export default MinhaConta