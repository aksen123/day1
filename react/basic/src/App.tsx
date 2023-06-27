import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';
import Viewer from './Component/Viewer';
import Controller from './Component/Controller';
import Even from './Component/Even';
function App() {
const [count, setCount] = useState(0);
const [text, setText] = useState('');
const handleChangeText = (e: any) => {
  setText(e.target.value)
}
const didMountRef = useRef(false);
useEffect(()=>{
  if(!didMountRef.current) {
    didMountRef.current = true;
    return
  } else {
    console.log('컴포넌트 업데이트')
  }
})
const handleSetCount = (value) => {
  setCount(count + value)
}
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input onChange={handleChangeText} value={text} type="text" />
      </section>
      <section>
        <Viewer  count={count}/>
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
