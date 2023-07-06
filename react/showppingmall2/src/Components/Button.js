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
const Button = ({ label, onClick }) => {
  return (
    <Container onClick={onClick}>
      {label}
    </Container>
  )
}

export default Button
