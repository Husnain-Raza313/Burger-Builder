import './App.css';
import React from 'react';
import Burger from './components/Burger';
import Form from './components/Form';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Burger />
    </div>
  );
}

export default App;
