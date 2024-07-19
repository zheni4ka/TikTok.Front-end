import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Subscribes from './Components/Subscribers';
import Watch from './Components/Watch';
import Recommended from './Components/Recommended';
const App : React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Recommended/>}/>
          <Route path='/subscribes' element={<Subscribes/>}/>
          <Route path='/watch' element={<Watch/>}/>
          <Route path='/recommended' element={<Recommended/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
