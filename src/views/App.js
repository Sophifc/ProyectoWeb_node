
import { Routes, Route } from 'react-router-dom';
import Ecosistema from './Ecosistema';
import PagInicio from './PagInicio';
import Extincion  from './Extincion';
import Noticias from './noticias';
import Animales from './animales';
import AnimalPorDia from './animalPorDia';
import Ayudanos from './ayudanos';
import ComoActuar from './comoActuras';

function App() {
  return (


      <Routes>
        <Route path="/" element={<ComoActuar/>} />
        <Route path="/Ecosistema" element={<Ecosistema></Ecosistema>} />
        <Route path="*" element={<p>no hay</p>}></Route>
      </Routes>



  );
}

export default App;
