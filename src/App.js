import './App.css';
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Session from './Pages/Session';
import AddSession from './Pages/AddSession';
import AddOperation from './Pages/AddOperation';

// Style import
import * as Styled from "./globalStyles";


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
    path: '/Session',
    element: <Session/>
  },
  
  {
    path: '/AddOperation',
    element: <AddOperation/>
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
