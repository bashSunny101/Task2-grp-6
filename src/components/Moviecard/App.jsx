import React, { useState, useEffect } from 'react';
import Card from './Card';
import './app.css';
import HeroImg from '../Header/heroImg';


const App = () => {
  
  return (
    <div>
        <HeroImg/>
      <div className="heading">
        <p id="heading">NOW PLAYING</p>
        <hr/>
      </div>
            <Card/>
      
      <div className="heading">
        <p id="heading">TOP RATED</p>
        <hr/>
      </div>
            <Card/>

       <div className="heading">
        <p id="heading">UPCOMING ..</p>
        <hr/>
      </div>
            <Card/>
      </div>


  );
};

export default App;
