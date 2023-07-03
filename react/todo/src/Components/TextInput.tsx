import React from 'react'
import { styled } from 'styled-components';

const Input = styled.input`
  padding: 8px;
  font-size: 1.2rem;
`
interface Props {
  readonly value : string;
  readonly onChange: (text: string)=>void;
}
// Props로 받아온 onChange >> setToDo 
const TextInput = ({value, onChange}: Props) => {
  return (
    <Input value={value} onChange={(event: any) => onChange(event.target.value)}/>

  )
}

export default TextInput
