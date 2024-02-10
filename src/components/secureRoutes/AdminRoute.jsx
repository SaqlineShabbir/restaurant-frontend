import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const AdminRoute = ({ children }) => {
    const isLoggedIn = UseAuth();

    console.log(isLoggedIn);
    const location = useLocation();

    if (isLoggedIn) {
        return children;
    } else {
        return <Navigate to="/login"></Navigate>;
    }
};

export default AdminRoute;
