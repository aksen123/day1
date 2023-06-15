import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Viewer from './Component/viewer';
import Controller from './Component/Controller';
import Even from './Component/Even';

function App() {
  const [count, setCount] = useState(0);
  // useState()의 인자값 0(초기값)은 count에 할당됨
  const [text, setText] = useState("")
  // // useState()의 인자값 ""은 text에 할당됨
  const handleSetCount = (value: number) => {
    setCount(count + value) // 초기값 count와 value를 더한값을 다시 count에 할당
  }
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value) //이벤트 타겟의 value를 text에 할당
  }
  useEffect( ()=>{
    console.log("count 업데이트")
  })
  
  useEffect(()=>{
    const intervalID = setInterval(()=>{
      console.log("포인트")
    },1000);

    return () => {
      console.log("클린업");
      clearInterval(intervalID)
    }
  })
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handleChangeText}/>
      </section>
      <section>
        <Viewer count = {count}/>
        {count % 2 === 0 && <Even/>}
        {/* AND 단락평가 >> 조건문이 true면 && 컴퍼넌트 실행 false면 실행 안함 */}
      </section>
      <section>
        <Controller handleSetCount = {handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
