import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading){
        return <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }

    if(!user){
       return <Navigate to='/login' state={{ from: location }} replace >  </Navigate>
    }
   
    
    return children;
    
};

export default PrivateRoute;