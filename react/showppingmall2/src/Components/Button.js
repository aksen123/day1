import React from 'react'
import { styled } from 'styled-components'

const Container = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;

`
const LinkImg = styled.img`
  cursor: pointer;
`
const Button = ({ label, onClick }) => {
  if(label !== ''){
    return (
      <Container onClick={onClick}>{label}</Container>
    )
  } else {
    return (<LinkImg src='https://i.pinimg.com/originals/ed/eb/ff/edebffb9cb814a895fbee7b8814a0489.jpg' onClick={onClick}/>)
  }
}

export default Button
