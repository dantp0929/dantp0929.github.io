import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from './components/navbar';
import Footer from './components/footer';

import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import More from './pages/more';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar className="nav-bar"/>
        <Routes>
            <Route element={ <App /> } />
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/more" element= { <More /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
