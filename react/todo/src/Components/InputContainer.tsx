import React from 'react'
import { styled } from 'styled-components';
import {useState} from 'react'
import ToDoInput from './ToDoInput';
import ShowInputButton from './ShowInputButton';

// interface Props {
//   readonly onAdd : (todo: string)=> void;
// }

const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);
  // const onClose = (toDo:string) => {
  //   setShowToDoInput(false)
  // }
  return (
    <>
      {showToDoInput && <ToDoInput/>}
      <ShowInputButton show={showToDoInput} onClick={()=> setShowToDoInput(!showToDoInput)} />
    </>
  )
}

export default InputContainer
