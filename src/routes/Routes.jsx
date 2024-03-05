import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '../layout/Dashboard';
import Main from '../layout/Main';
import AboutUs from '../pages/AboutUs';

import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import MenuDetail from '../pages/MenuDetail';
import Register from '../pages/Register';
import AddMenu from '../pages/dashboard/AddMenu';
import UserProfile from '../pages/dashboard/UserProfile';
import MakeAdmin from '../pages/dashboard/MakeAdmin';
import UpdateProfile from '../pages/dashboard/UpdateProfile';
import ManageMenu from '../pages/dashboard/ManageMenu';
import Cart from '../pages/dashboard/Cart';
import ExampleCart from '../pages/ExampleCart';
import AdminRoute from '../components/secureRoutes/AdminRoute';
import PrivateRoute from '../components/secureRoutes/PrivateRoute';



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
        element: <Menu></Menu>,
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
      },
      {
        path: '/menu/:menuId',
        element: <MenuDetail></MenuDetail>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/',
        element: <UserProfile></UserProfile>,
      },
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>,
      },
      {
        path: '/dashboard/add-menu',
        element: <AdminRoute><AddMenu></AddMenu></AdminRoute>,
      },
      {
        path: '/dashboard/update-profile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: 'dashboard/manage-menus',
        element: <AdminRoute><ManageMenu></ManageMenu></AdminRoute>
      },
      {
        path: 'dashboard/make-admin',
        element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>,
      },
    ],
  },
]);
