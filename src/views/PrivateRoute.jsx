import { useContext } from 'react';
import {  Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  
  return isLoggedIn ? children : <Navigate to="/" replace />
};

export default PrivateRoute;