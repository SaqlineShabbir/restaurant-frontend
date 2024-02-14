import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import { useSelector } from 'react-redux';

const AdminRoute = ({ children }) => {
    const isLoggedIn = UseAuth();
    const auth = useSelector((state) => state.auth);
    const admin = auth?.user?.role === 'admin'
    const location = useLocation();

    if (isLoggedIn && admin) {
        return children;
    } else {
        return <Navigate to="/"></Navigate>;
    }
};

export default AdminRoute;
