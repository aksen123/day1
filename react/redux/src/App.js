import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './Components/Box';
function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch()

  const count = useSelector((state) => state.count)
  const id = useSelector((state) => state.id)
  const pw = useSelector((state) => state.pw)

  const increase = () => {
    dispatch({ type: 'INCREASE', payload: {num: 5} })
  }
  const decrease = () => {
    dispatch({ type: 'DECREASE' })
  }
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id:'park', pw: 1234 } })
  }
  return (
    <div className="App">
      <h1>{id} {pw}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={login}>login</button>
      <button onClick={decrease}>-</button>
      <Box />
    </div>
  );
}

export default App;
