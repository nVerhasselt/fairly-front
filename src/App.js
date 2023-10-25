import './App.css';
import { createBrowserRouter, RouterProvider, Link, NavLink, Outlet } from 'react-router-dom';
import NavFooter from './components/NavFooter.js';
import Login from './Pages/Login';
import Home from './Pages/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
 
  {
    path: '/Login',
    element: <Login/>
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
