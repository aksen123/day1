import React from 'react'
import { useState, useEffect } from 'react'
import App from '../App';

const MAX_CAPACITY = 10;


const Accommodate = () => {
  const [isFull, setIsFull] = useState(false);
  // const [count, IncreaseCount, DecreaseCount] = App(0);

  useEffect(()=>{
    console.log('==========');
    console.log("useEffect is called");
    console.log(`isFull: ${isFull}`);
  })
  // useEffect(()=>{
  //   setIsFull(count >= MAX_CAPACITY);
  //   console.log(`current count value : ${count}`)
  // },[count])
  return (
    <div style={{padding: 16}}>
      {/* <p>{`총 ${count}명 수용했습니다`}</p>
      <button disabled={isFull} onClick={IncreaseCount}>입장</button>
      <button onClick={DecreaseCount}>퇴장</button>
      {isFull && <p style={{color:"red"}}>정원이 가득 찼습니다.</p>} */}
    </div>
  )
}

export default Accommodate
