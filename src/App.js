import './App.css';
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Session from './Pages/Session';
import AddSession from './Pages/AddSession';
import AddTransaction from './Pages/AddTransaction';
import Settings from './Pages/Settings';
import Balance from './Pages/Balance';

//TODO: Use children and outlet to understand their 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
 
  {
    path: '/Register',
    element: <Register/>
  },

  {
    path: '/Home',
    element: <Home/>
  },

  {
    path: '/Settings',
    element: <Settings/>
  },
  
  {
    path: '/AddSession',
    element: <AddSession/>
  },

  {
    path: '/Session/:sessionId',
    element: <Session/>
  },
  
  {
    path: '/AddTransaction',
    element: <AddTransaction/>
  },

  {
    path: '/Balance',
    element: <Balance/>
  }
]);


// function ErrorPage() {
//   const error = useRouteError()
//   return 
//   <>
//     <h1>Une erreur est survenue</h1>
//   </>
// }


function App() {
  return (
  
    <RouterProvider router ={router}/>
   
  );
}

export default App;
