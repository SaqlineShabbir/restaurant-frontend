import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = UseAuth();


  const location = useLocation();

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;
