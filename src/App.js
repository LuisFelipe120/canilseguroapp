import { Route, Routes } from 'react-router-dom';
import './App.css';
import DocPack from './pages/DocPack';
import Home from './pages/Home';
import KennelClub from './pages/KennelClub';
import CardDetalhes from './pages/CardDetalhes';


function App() {
  return (
    <Routes>
      <Route path='/'element= {
        <Home />
      } >
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
    </Routes>
  );
}

export default App;
