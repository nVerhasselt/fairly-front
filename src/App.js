import './App.css';
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Session from './Pages/Session';
import AddSession from './Pages/AddSession';
import AddTransaction from './Pages/AddTransaction';
import Settings from './Pages/Settings';

//TODO: Use children and outlet to understand their 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
 
  {
    path: '/Login',
    element: <Login/>
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
