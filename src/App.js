import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import TesseractScan from './Components/TesseractScan/TesseractScan';


function App() {
  return (
    <div className="App">
        <Header />
        <Info />
        <FontConverter />
        <TesseractScan />
    </div>
  );
}

export default App;
