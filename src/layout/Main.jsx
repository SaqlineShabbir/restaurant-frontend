import { Outlet } from 'react-router-dom';
import Navigation from '../components/shared/Navigation';
// import useAuthCheck from '../hooks/UseAuthCheck';
const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};
export default Main;
