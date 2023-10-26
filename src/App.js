import './App.css';
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router-dom';
import NavFooter from './components/NavFooter';
import Login from './Pages/Login';
import Home from './Pages/Home';
import AddSession from './Pages/AddSession';

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
    path: '/AddSession',
    element: <AddSession/>
  },
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
