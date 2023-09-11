import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from '../components/secureRoutes/PrivateRoute';
import Main from '../layout/Main';
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Register from '../pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/signup',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/menu',
        element: (
          <PrivateRoute>
            <Menu></Menu>
          </PrivateRoute>
        ),
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>,
      },
    ],
  },
]);
