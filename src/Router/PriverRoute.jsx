import React from 'react';
import useAuth from '../Component/Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Component/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();

    if(loading){
        return <Spinner />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;