import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroList from './Components/HeroList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hero App
        </p>
       <HeroList/>
      </header>
    </div>
  );
}

export default App;
