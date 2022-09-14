import './App.css';
import React from 'react';
import Burger from './pages/Burger';
import Form from './pages/Form';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './pages/Error';
import Order from './pages/Order';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route  path="/" element={<Burger />} />
        <Route path="/signform" element={<Form />} />
        <Route path="/orderlist" element={<Order />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
