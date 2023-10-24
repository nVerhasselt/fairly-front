import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>connexion</div>
  },
  {
    path: '/inscritption',
    element: <div>inscritption</div> 
  }
])

function App() {
  return (
    <RouterProvider router ={router}/>
  );
}

export default App;
