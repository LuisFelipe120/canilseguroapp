
import Layout from '../../components/Layout';
import './style.css';
import CachorroBanner from './../../assets/images/close-de-um-border-collie-em-um-campo-ofegante-sob-a-luz-do-sol_181624-30059.jpg'
import CriadorBanner from './../../assets/images/mulher-adotando-caes-escolha-dificil_628849-155.jpg'

import React from 'react'
import '../Sobre'
import { useContextGlobal } from '../../context/PostContext';

const Home = () => {
  const { toggle, searchcontext, setSearchContext } = useContextGlobal();
  return (
    <div>
     <Layout>
      <div className='homeArea'>
        <a href='/Cardpage'>
        <section className='tenhaCanil'>
        {toggle && (
                    <div className='pesquisaContainer'>
                        <input
                            type="text"
                            placeholder="Pesquisar por endereço"
                            value={searchcontext}
                            onChange={(e) => setSearchContext(e.target.value)}
                        />
                        <div className='menuDropdown'>
                            {/* Conteúdo do menu */}
                           
                        </div>
                    </div>
                )}
              <div className='tituloArea'>
                <h1>Tenha um cachorro de Raça</h1>
              </div>
              <div className='subTituloArea'>
                <h2>Canis com documentação Pedigree afiliados a CBKC</h2>
              </div>
              <div className='ImagemArea'>
                <img src={CachorroBanner}/>
              </div>
          </section>
          </a>
          <a href='/KennelClub'>

          <section className='criador'>
              <div className='tituloArea'>
                <h1>Seja um Criador Especializado</h1>
              </div>
              <div className='subTituloArea'>
                <h2>Seja um criador responsável, não financie canil "fundo de quintal"</h2>
              </div>
              <div className='ImagemArea'>
                <img src={CriadorBanner}/>
              </div>
          </section>
          </a>
          </div>
        
      </Layout>
   </div>
      );
}

export default Home
