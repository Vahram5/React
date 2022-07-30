import React from 'react';
// import { useDispatch } from 'react-redux';
import './App.css';
import { Body } from './features/body/sections/section1/body';
import Header from './features/header/headerSlice/header.js';


function App() {

    return (
        <div className="App">
          <Header/>
          <Body />
        </div>
    );
}

export default App;
