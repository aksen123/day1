import React from 'react'
import { styled } from 'styled-components';


//얘도 컴퍼넌트라서 Props를 받을수 있다 
const Container = styled.button`
  background-color : ${(props)=> props.color};
  border: 0;
  color: #fff;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  &:Hover {
    background-color : ${(props)=> props.color};
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);

  }
`
interface Props {
  readonly label : string;
  readonly onClick?: () => void;
  readonly color? : string
}

const Button = ({label, onClick, color='#ff5722'}: Props) => {
  return (
    <Container onClick={onClick} color={color}>{label}</Container>
  )
}
// onClick(onDelete함수) : App(onDelete함수 만들고(setToDoList) onDelete란 이름으로 보내줌) >>> DataView(onDelete란 이름으로 받고 onDelete란 이름으로 다시 보내줌) >>>TodoList(onDelete란 이름으로 받고 onDelete란 이름으로 다시 보내줌 (if문으로 만들어서) ) >>> TodoItem(onDelete이름으로 받고 onClick이란 이름으로 보내좀) >>> Button( onClick으로 받아서 실행 ) 순으로 Props로 내려왔음  
export default Button
