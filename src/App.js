import './App.css';
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router-dom';
import NavFooter from './components/NavFooter.js';
import Login from './Pages/Login';
import Home from './Pages/Home';


const router = createBrowserRouter([
  {
    path: '/',
    /** Outlet is a react-router-dom component, put the elements of the children routes on this level */
    element: <div><Outlet/></div>,
    children: [
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: '/home',
        element: <Home/>
      },
    ]
  },
]);

function App() {
  return (
    <RouterProvider router ={router}/>
  );
}

export default App;
