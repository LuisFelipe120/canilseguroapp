import { Route, Routes } from 'react-router-dom';
import './App.css';
import DocPack from './pages/DocPack';
import Home from './pages/Home';
import CardPage from './pages/CardPage';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastrarRacas from './pages/CadastrarRacas';
import MinhaConta from './pages/MinhaConta';
import KennelClub from './pages/KennelClub';
import CardDetalhes from './pages/CardDetalhes';
import CardCanilDetalhes from './pages/CardCanilDetalhes';
import Sobre from './pages/Sobre';
import CadastroCanil from './pages/CadastroCanil';
import Login from './pages/Login';
import ClientPrivateRoute from './components/Auth/ClientPrivateRoute';
import Painel from './pages/painel';


function App() {

  return (
    
   <Routes>
     
    <Route exact path='/'element= {
      <Home />
    } >
    </Route>
    <Route exact path="/Cardpage" element={
      <CardPage/>
      }>
            </Route>

      <Route exact path='/minhaconta' element={
        <MinhaConta/>
      }>
              </Route>
              <Route exact path='/DocPack' element= {
        <DocPack />
      }>

      </Route>

      <Route exact path='/KennelClub' element= {
        <KennelClub />
      }>

      </Route>

      <Route path='/CadastrarRacas' element= {
        <CadastrarRacas />
      }>

      </Route>
      
      <Route exact path='/CardDetalhes' element= {
        <CardDetalhes />
      }>
        

      </Route>
      <Route exact path='/CardcanilDetalhes' element= {
        <CardCanilDetalhes />
      }>
        

      </Route>

      <Route exact path='/CaneCorso' element= {
         <CardCanilDetalhes/>
      } />
      <Route exact path='/CadastroUsuario' element={
        <CadastroUsuario/>
      }></Route>

      <Route exact path='/sobre' element={
        <Sobre/>
        }></Route>
       <Route exact path='/CadastroCanil' element={
        <CadastroCanil/>

      }></Route>
      <Route exact path='/login' element={
        <Login/>

      }></Route>
          {/* rota privada */}
          <Route exact path="/painel" element={
        <ClientPrivateRoute>
          <Painel />
        </ClientPrivateRoute>
        
      }/>
   </Routes>
  );
}

export default App;
