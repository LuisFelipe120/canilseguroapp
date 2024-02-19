import { Route, Routes } from 'react-router-dom';
import './pages/Sobre/style.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import Cadastro from './pages/Cadastro'

function App() {
  return (
   <Routes>
    <Route path='/'element= {
      <Home />
    } >
   </Route>
    <Route path='/sobre'element= {
      <Sobre/>
    } >
    </Route>  
    <Route path='/cad'element= {
      <Cadastro/>
    } >
    </Route>  
   </Routes>
  );
}

export default App;
