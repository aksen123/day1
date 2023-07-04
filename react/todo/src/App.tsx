import React,{useState} from 'react';
import logo from './logo.svg';
import { styled } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Button from './Components/Button';
import Title from './Components/Title';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import DataView from './Components/DataView';
import TextInput from './Components/TextInput';
import ToDoInput from './Components/ToDoInput';
import ShowInputButton from './Components/ShowInputButton';
import InputContainer from './Components/InputContainer';
import { ToDoListContextProvider } from './Components/ToDoListContextProvider';
import Header from './Components/Header';
const Container = styled.div`
display: flex;
flex-direction : column;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #eee;
`

function App() {
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기', 
    '운동하기',
    '책읽기'
  ]);
  // const [toDo, setToDo] = useState('');// TodoInput.tsx에 새로 만들어서 없어도 상관없을거같음

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter(items => items !== todo))
  }
  const onAdd = (toDo: string) => {
    if(toDo === '') return; // input의 value가 빈공간이면 그냥 종료

    setToDoList([...toDoList, toDo]); //입력한값 추가하기
    // setToDo('');  // input value 빈문자열로 만듦
  }
  return (
    <Container className="App">
      <ToDoListContextProvider>
        <Header />
      <Routes>
        <Route path='/' element={<DataView />}/>
        <Route path='/add' element={<ToDoInput />} />
        <Route path='*' element={
          <>
            404
            <br />
            Not Found
          </>
        }/>
      </Routes>

      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
