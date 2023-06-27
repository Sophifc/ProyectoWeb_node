import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Decodificar from './validarRol';

const PrivateAdminRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const userRole = Decodificar();
  console.log(userRole)
  return isLoggedIn && userRole === 'admin' ? children : <Navigate to="/" replace />;
};

export default PrivateAdminRoute;