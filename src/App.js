import { Route, Routes } from 'react-router-dom';
import './App.css';
import DocPack from './pages/DocPack';
import Home from './pages/Home';
import CardPage from './pages/CardPage';
import CadastroUsuario from './pages/CadastroUsuario';
import MinhaConta from './pages/MinhaConta';

import KennelClub from './pages/KennelClub';
import CardDetalhes from './pages/CardDetalhes';
import CardCanilDetalhes from './pages/CardCanilDetalhes';
import Sobre from './pages/Sobre';
import CadastroCanil from './pages/CadastroCanil';
import Login from './pages/Login';


function App() {
  return (
   <Routes>
    <Route path='/'element= {
      <Home />
    } >
    </Route>
    <Route path="/Cardpage" element={
      <CardPage/>
      }>
            </Route>

      <Route path='/minhaconta' element={
        <MinhaConta/>
      }>
              </Route>
              <Route path='/DocPack' element= {
        <DocPack />
      }>

      </Route>

      <Route path='/KennelClub' element= {
        <KennelClub />
      }>

      </Route>
      
      <Route path='/CardDetalhes' element= {
        <CardDetalhes />
      }>
        

      </Route>

      <Route path='/CaneCorso' element= {
         <CardCanilDetalhes/>
      } />
      <Route path='/CadastroUsuario' element={
        <CadastroUsuario/>
      }></Route>

      <Route path='/sobre' element={
        <Sobre/>
        }></Route>
       <Route path='/CadastroCanil' element={
        <CadastroCanil/>

      }></Route>
       <Route path='/Login' element={
        <Login/>

      }></Route>
   </Routes>
  );
}

export default App;
