import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor ,color}) {
  //console.log(onChangeColor);
  function handlelick(){
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  
  return <div onClick={handlelick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
