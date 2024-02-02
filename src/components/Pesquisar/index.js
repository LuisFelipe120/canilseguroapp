import React, {useState} from 'react'
import './style.css'
const Pesquisar = () => {

    const [valordabusca, setValorDaBusca] = React.useState()
  return (
    <search>
        <input  className="barraDePesquisar" type="text" placeholder="Pesquise sua cidade" onChange={(event) => {
    setValorDaBusca(event.target.value);
   }} />
    </search>
  )
}

export default Pesquisar