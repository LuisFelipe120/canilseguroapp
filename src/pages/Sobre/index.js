import React from 'react'
import './style.css';
import hotdog from '../../assets/images/border-collie.jpg';
import Layout from '../../components/Layout';

function Sobre() {


  return (
    <Layout>
      <div className='sobreDiv'>
        <div className='area'>
          <div id='tituloArea'>
            <h2 className='project'><strong>SOBRE O PROJETO</strong></h2>
          </div>
          
          <div id='subtitulo'>
            <h2>Vamos te contar um pouco desse projeto!</h2>
          </div>
        </div>


        <div>
          <img className='hotdog' src={hotdog} />
        </div>
      </div>

      <div className='sobreArea'>
        <p id='textArea'>
          Bem-vindo ao nosso projeto dedicado a compartilhar canis reconhecidos pela CBKC de maneira ética e responsável. Nossa missão é conectar amantes de cães com criadores confiáveis, promovendo práticas de criação que respeitem o bem-estar animal.
          <br/>
          <br/>
          Somos entusiastas e especialistas em cinofilia, comprometidos com a disseminação de informações precisas e transparentes sobre canis e a criação de cães no Brasil.
          <br/>
          <br/>
          Nossos Valores
          <br/>
          <br/>
          Ética e Transparência: Trabalhamos com canis que seguem os padrões da CBKC e prezamos pela transparência em todas as ações.
          Bem-Estar Animal: Priorizamos a saúde e o bem-estar dos cães, promovendo práticas de criação seguras e saudáveis.
          Educação e Consciência: Fornecemos recursos para ajudar futuros donos a tomar decisões informadas e responsáveis.
          Comunidade e Apoio:Construímos uma comunidade de amantes de cães que se apoiam mutuamente, oferecendo suporte contínuo.
          <br/>
          <br/>
          Nosso Compromisso
          <br/>
          <br/>
          Queremos ser uma referência confiável para quem procura canis éticos, garantindo que cada cão encontre um lar amoroso e responsável.
        </p>
      </div>
    </Layout>
  )
}

export default Sobre
