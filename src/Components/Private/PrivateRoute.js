import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext)
    if (loading){
        return <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
    if(user && user.uid){
        return children;
    }
    
    return <Navigate to={'/login'}  state = {{from:location}} replace>  </Navigate>
    
};

export default PrivateRoute;