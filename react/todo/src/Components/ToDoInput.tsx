import React,{useState} from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import TextInput from './TextInput';
import Title from './Title';
import { TodoListContext } from './ToDoListContextProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import ShowInputButton from './ShowInputButton';
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
// const Background = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: rgb(0, 0, 0, 0.75);
// `
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
`
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
// interface Props {
//   readonly onClose? : (toDo: string)=> void;
// }{onClose}: Props


const ToDoInput = () => {
  const navigate = useNavigate();
  const { onAdd } = useContext(TodoListContext)

  const [toDo, setToDo] = useState('');
  
  const onAddTodo = () => {
    if(toDo === '') return;

    onAdd(toDo);
    setToDo('')
  }
  return (
    <Container>
  
        <Content>
          <Title label='할 일 추가' />
          <InputContainer>
            <TextInput value={toDo} onChange={setToDo}/>
            <Button label='추가' color='#304ffe' onClick={onAddTodo}/>
          </InputContainer>
        </Content>
        <ShowInputButton show={true} onClick={()=>navigate('/')} />

    </Container>
  )
}

export default ToDoInput
