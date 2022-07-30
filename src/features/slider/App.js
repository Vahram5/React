import React, { useState } from 'react';
import './App.css';
import {Image} from "./app/image"
// import { Decreased, Increase } from './app/info';
import firstimage from "./images/1.jpg"
import secondimage from "./images/2.jpg"
import thirdimage from "./images/3.jpg"

function Slider() {
  var [value, setValue] = useState(0)
  
  return (
    <div className="Slider">
        <Image 
          images={[firstimage, secondimage, thirdimage]} 
          value={value}
          functionSet={setValue}
        />
    </div>
  );
}

export default Slider;
