import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';




import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Navbar from './Navbar'

function App() {




  return (
   
      <div className="App">
        <Navbar />
        <Home />
       
      </div>

  );
}

export default App;
