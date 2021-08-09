import React from 'react';
import Home from './page/Home';
import Sidebar from './component/Sidebar';
import Modular from './component/Modular';
import './app.css'

export default function App() {
  return (
    <div className='app'>
      <Home/>
       <Modular className='modula'/>
      <Sidebar/>
     
    </div>
  )
}
