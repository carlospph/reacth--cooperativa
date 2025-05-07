import { Link, Outlet } from 'react-router-dom';

import './App.css';
import Header from './componentes/header/Header';

export default function App() {
  return (
    
    <div>
    <Header/>
    <div  className="distancia">
  <Outlet/>
  </div>
  </div>
  );
}
