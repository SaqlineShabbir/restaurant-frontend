import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = UseAuth();
  const location = useLocation();

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
