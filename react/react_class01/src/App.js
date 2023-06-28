import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BoxClass from './BoxClass';

function App() {
  let [counter2, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter2 + 1);

    console.log(`counter2 state는 ${counter2}`)
  }
  return (
    <div className="App">
      <div>state: {counter2}</div>
      <button onClick={increase}>클릭</button>
      
    </div>
  );
}

export default App;
