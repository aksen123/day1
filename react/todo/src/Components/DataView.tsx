import React from 'react'
import { styled } from 'styled-components';
import Title from './Title'
import TodoList from './TodoList'
import ShowInputButton from './ShowInputButton';
import {useNavigate} from 'react-router-dom'

const Container = styled.div` 
  display:  flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`
// interface Props {
//   readonly toDoList : ReadonlyArray<string>;
//   readonly onDelete? : (todo: string) => void;
// } 
const DataView = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList /> 
      <ShowInputButton show={false} onClick={()=> navigate('/add')}/>
    </Container>
  )
}

export default DataView
