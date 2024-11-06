import React from 'react'; 
import './App.css';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

// Import BrowserRouter, Route, and Switch (or Routes)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Register.jsx" element={<Register/>} />
          <Route path="/Login.jsx" element={<Login/>} />
          <Route path="/Home.jsx" element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
