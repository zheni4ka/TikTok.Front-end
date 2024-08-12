import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Subscribes from './Components/Subscribers';
import Watch from './Components/Watch';
import Recommended from './Components/Recommended';
import Register from './AccountManagement/Register';
import Login from './AccountManagement/Login';
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
          <Route path='/register' Component={Register}/>
          <Route path='/login' Component={Login}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
