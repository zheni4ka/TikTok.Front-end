import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
const App : React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
