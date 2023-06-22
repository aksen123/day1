import { useReducer, useState } from "react"

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case  "INCREASE" : 
      return state + action.data;
    case "DECREASE" : 
      return state - action.data;
    case "INIT":
      return 0
    default :
      return state
  } 
}


const TestComp = () =>{
  const [count, dispatch] = useReducer(reducer, 0)
  // const [count, setCount] = useState(0);
  // const increase = () => {
  //   setCount(count + 1);
  // }
  // const decrease = () => {
  //   setCount(count - 1 );
  // }
  return (
  <div>
  <h4>
    테스트 컴포넌트
  </h4>
  <div>
    <h2>{count}</h2>
  </div>
  <div>
    <button onClick={()=>dispatch({type: "INCREASE", data : 1})}>+</button>
    <button onClick={()=> dispatch({type: "INIT"})}>0으로 초기화</button>
    <button onClick={()=>dispatch({type: "DECREASE", data : 1 })}>-</button>
  </div>

  </div>
  )
}

export default TestComp