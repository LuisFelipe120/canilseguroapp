import React from 'react'

const Sobre = () => {
  return (
   <body>
    <header>

      <div>
        <input id='estado' placeholder='busque por um estado'></input>
      </div>

    </header>

    <main>
      <div id='tituloArea'>
          <h2 >SOBRE O PROJETO</h2>
      </div>

      <div id='subtitulo'>
          <h2>Vamos te contar um pouco desse projeto!</h2>
      </div>

      <div id='sobreArea'>
          <h2 id=''>O canil Canaã, fundado em 2014, é líder e referência regional 
            no estado do Espírito Santo. Seus proprietários, que sempre tiveram e amaram os cães, iniciaram as atividades do canil com algumas poucas raças e não demorou muito
            para que a pequena criação ganhasse destaque entre os criadores.
            Com uma grande procura e o aumento do plantel, os fundadores do Canil Canaã decidiram transferir a sua sede para a cidade de Guarapari, famosa cidade litorânea
            do estado do Espírito Santo, e que possui clima agradável, praias paradisíacas e um bom potencial logístico para a atividade.
          </h2>
          <h2 id='segundo'>Com o reconhecimento alcançado pela qualidade, cuidados, carinho e dedicação na 
            criação de seus filhotes, o Canil Canaã decidiu em 2022 investir em uma nova sede, com uma estrutura ainda mais espaçosa
            e que promova o bem estar, qualidade e saúde dos animais.
            Além de uma infraestrutura toda modernizada, o canil é registrado pela
            Confederação Brasileira de Cinofilia e possui padreadores e matrizes de primeira linha, com destaque para as raças Border Collie, Golden Retriever e Beagle.
            O canil trabalha com venda permanente de filhotes e compreende a sua responsabilidade de entregar os cães com segurança.
            Através de uma parceria estratégica de longa data com a GolLog, oferecemos transporte de qualidade para que você receba seu filhote com total segurança em todo território nacional.
          </h2>
      </div>

    </main>

    <footer>

    </footer>

   </body>
   
  )
}

export default Sobre