
import { Routes, Route } from 'react-router-dom';
import Ecosistema from './Ecosistema';

import EcosistemaSelva from './ecosistemaSelva';
import EcosistemaDesierto from './ecosistemaDesierto';



import PagInicio from './PagInicio';
import Extincion  from './Extincion';
import Noticias from './noticias';
import Animales from './animales';
import AnimalPorDia from './animalPorDia';
import Ayudanos from './ayudanos';
import ComoActuar from './comoActuras';
import RegistroSesion from './registroSesion';
import InicioSesion from './inicioSesion';
import { AuthProvider } from './AuthContext';
import Perfil from './perfil';
import PrivateRoute from './PrivateRoute';
import ConfigAdmin from './pagAdmin';
import PrivateAdminRoute from './PrivateAdminRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PagInicio />} />
        <Route path="/ecosistema" element={<Ecosistema />} />

        <Route path="/ecosistemaSelva" element={<EcosistemaSelva />} />
        <Route path="/ecosistemaDesierto" element={<EcosistemaDesierto />} />

        <Route path="/extincion" element={<Extincion />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/animales" element={<Animales />} />
        <Route path="/animal-por-dia" element={<AnimalPorDia />} />
        <Route path="/ayudanos" element={<Ayudanos />} />
        <Route path="/como-actuar" element={<ComoActuar />} />
        <Route path="/iniciar" element={<InicioSesion />} />
        <Route path="/Registrarse" element={<RegistroSesion />} />
        <Route path="/perfil" element={<PrivateRoute><Perfil /></PrivateRoute>} />
        <Route path="/adminConfig" element={<PrivateAdminRoute><ConfigAdmin /></PrivateAdminRoute>} />
      </Routes>
    </AuthProvider>

  );
}

export default App;

