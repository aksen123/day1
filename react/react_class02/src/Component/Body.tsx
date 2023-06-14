import React from "react";
import { useState } from "react";
import "./Body.css"


interface numTake {
  num: number
}

function Viewer({num}: numTake) {
  return num % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>
}

function Body() {
  const [num, setNum] = useState(0);
  const onIncrease = () => {
    setNum(num + 1)
  }
  const onDecrease = () => {
    setNum(num - 1)
  }
  return (
    <div>
      <h2>{num}</h2>
      <Viewer num = {num}/>     
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  )
}


export default Body