import React from 'react'
import logo from '../jordan.svg'
import { styled } from 'styled-components'

const Container = styled.div`

`
const LoginHeader = ({title}) => {
  return (
    <Container>
      <div className='logo'>
      <img width={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjVfjIrPRFPKE6-4xtCSm4cIqF9PTQQXJqw&usqp=CAU'/>
      <img width={50} src={logo} />
      </div>
      <h2>{/*가입 또는*/} {title}</h2>
    </Container>
  )
}

export default LoginHeader
