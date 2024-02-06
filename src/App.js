import { Route, Routes } from 'react-router-dom';
import './App.css';
import DocPack from './pages/DocPack';
import Home from './pages/Home';

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
    </Routes>
  );
}

export default App;
