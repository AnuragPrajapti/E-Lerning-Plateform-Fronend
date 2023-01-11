import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ isLogged } : any) => {

    const isAdminLoggedIn  = JSON.parse(localStorage.getItem('authToken')!);
    if(!isAdminLoggedIn) {
        return <Navigate to='/signin' replace />
    }

  return isLogged
}

export default PrivateRoutes;