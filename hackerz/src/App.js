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
import ArtistTags from './ArtistTags'

function App() {




  return (
   
      <div className="App">
        <Navbar />
        <div className="wheelBoxContainer">
          <div>music to bring people together</div>
          <Home/>
        </div>
        <ArtistTags />
       
      </div>

  );
}

export default App;
