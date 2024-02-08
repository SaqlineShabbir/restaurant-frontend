import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Navigation from '../components/shared/Navigation';
// import useAuthCheck from '../hooks/UseAuthCheck';
const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
export default Main;
