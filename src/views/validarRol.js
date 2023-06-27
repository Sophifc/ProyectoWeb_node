import jwtDecode from 'jwt-decode';

function Decodificar() {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.rol;
    return userRole;
}

export default Decodificar;