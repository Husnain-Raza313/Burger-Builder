import './App.css';
import React from 'react';
import Burger from './components/Burger';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error';
import Order from './components/Order';
import { useNavigate } from 'react-router-dom';


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
