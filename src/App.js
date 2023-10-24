import './App.css';
import { createBrowserRouter, RouterProvider, Link, NavLink } from 'react-router-dom';
import NavFooter from './components/NavFooter.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <div>
      Connexion
      
      
      <nav>
        <NavLink to="/inscription">Inscritption</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/session">Session</NavLink>
      </nav>

      <NavFooter/>
    </div>
  },
  {
    path: '/inscritption',
    element: <div>Inscritption</div> 
  },
  {
    path: '/home',
    element: <div>Home</div>
  },
  {
    path: '/session',
    element: <div>Session</div>
  }
])

function App() {
  return (
    <RouterProvider router ={router}/>
  );
}

export default App;
