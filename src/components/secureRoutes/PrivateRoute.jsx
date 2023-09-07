import { Navigate } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = UseAuth();

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
