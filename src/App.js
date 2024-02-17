import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CardPage from './pages/CardPage';
import CadastroUsuario from './pages/CadastroUsuario';
import MinhaConta from './pages/MinhaConta';

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

      <Route path='/CadastroUsuario' element={
        <CadastroUsuario/>
      }></Route>
   </Routes>
  );
}

export default App;
