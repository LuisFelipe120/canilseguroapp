import React from 'react'
import './style.css'
import {FaSearch} from 'react-icons/fa';
const Pesquisar = () => {

  return (
  <div className='pesquisarLayout'>
    <div className='iconPesquisar'>
      <FaSearch/>
     </div>
      <input  className='search' type="text" placeholder="Pesquise sua cidade" />
   
  </div>
  )
}

export default Pesquisar