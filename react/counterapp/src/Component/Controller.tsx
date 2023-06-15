interface numTwo {
  handleSetCount: any
  //어떤 버튼을 누를지 모르니 any넣어줌
}

const Controller = ({handleSetCount}: numTwo) => {


  return (
    <div>
      <button onClick={()=> handleSetCount(-1)}>-1</button>
      <button onClick={()=> handleSetCount(-10)}>-10</button>
      <button onClick={()=> handleSetCount(-100)}>-100</button>
      <button onClick={()=> handleSetCount(+100)}>+100</button>
      <button onClick={()=> handleSetCount(+10)}>+10</button>
      <button onClick={()=> handleSetCount(+1)}>+1</button>
      {/* 앞에 화살표 함수 안넣어주면 클릭안해도 숫자가 더해짐 */}
    </div>
  )
}

export default Controller