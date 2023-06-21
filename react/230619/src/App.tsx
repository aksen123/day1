import React, { useEffect, useState, useRef, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/Todoeditor';
import TodoList from './component/TodoList';
import TestComp from './component/TestComp';

const mockTodo = [
  {
    id : 0,
    isDone : false,
    content: "React 공부하기",
    createdDate : new Date().getTime()
  },
  {
    id : 1,
    isDone : false,
    content: "빨래 널기",
    createdDate : new Date().getTime()
  },
  {
    id : 2,
    isDone : false,
    content: "노래 연습하기",
    createdDate : new Date().getTime()
  },
]

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CREATE" : {
      return [action.newItem, ...state];
    }
    case "UPDATE" : {
      return state.map((it: any) =>
      it.id === action.targetId 
      ? 
      {...it, isDone : !it.isDone } : it )
    }
    case "DELETE" : {
      return state.filter((it: any) => it.id !== action.targetId)
    }
    default : 
    return state
  }
}


function App() {
  // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo)
  const idRef = useRef(3);
  const onCreate = (content: any) => {
    dispatch({
    type: "CREATE",
    newItem: {
      id : idRef.current,
      isDone : false,
      content,
      createdDate: new Date().getTime()
    }
  })
  // const newItem = {
  //   id : idRef.current,
  //   isDone : false,
  //   content,
  //   createdDate : new Date().getTime()
  // };
  // setTodo([newItem, ...todo])
  idRef.current += 1;
  };
  
  const onUpdate = (targetId: any) => {
    dispatch({
      type: "UPDATE",
      targetId
    })
    // setTodo(todo.map((it) => {
    //   if(it.id === targetId){
    //     return {
    //       ...it,
    //       isDone : !it.isDone
    //     }
    //   } else {
    //     return it
    //   }
    // }))
  } 
  const onDelete = (targetId: any) => {
    dispatch({
      type: "DELETE",
      targetId
    })
    // setTodo(todo.filter((it) => it.id !== targetId));
  }
  return (
    <div className="App">
      <TestComp />
      <Header />
      <TodoEditor onCreate = {onCreate} />
      <TodoList  todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
