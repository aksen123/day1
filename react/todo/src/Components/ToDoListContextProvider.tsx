import React from 'react'
import { createContext, useState } from 'react'

interface Context {
  readonly toDoList : string[],
  readonly onAdd : (toDo: string) => void,
  readonly onDelete : (toDo: string) => void,

}

const TodoListContext = createContext<Context>({
  toDoList: [],
  onAdd: (): void => {},
  onDelete: ():void =>{},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({children}: Props) => {
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '운동 하기',
    '책 읽기'
  ])
  const onAdd =(toDo: string) =>{
    if(toDo === '') return; 

    setToDoList([...toDoList, toDo]); 

  }
  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter(items => items !== todo))
  }
  return (
    <TodoListContext.Provider value={{toDoList, onAdd, onDelete}}>
      {children}
    </TodoListContext.Provider>
  )
}
export  { ToDoListContextProvider, TodoListContext }

  