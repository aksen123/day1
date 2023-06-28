import React from 'react'
import { useState, useReducer } from 'react'

const reducer  = (state, action) => {
  switch(action.type) {
    case "INCREASE" : 
      return state + action.data;
    case "DECREASE" : 
      return state - action.data;
    case "INIT" : 
      return 0;
    default :
      return state
  }
}

const App = () => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h4>테스트</h4>
      <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch({type: "INCREASE", data: 1})}>+</button>
        <button onClick={()=>dispatch({type: "INIT"})}>0</button>
        <button onClick={()=>dispatch({type: "DECREASE", data: 1})}>-</button>
      </div>
    </div>
  )
}

export default App
