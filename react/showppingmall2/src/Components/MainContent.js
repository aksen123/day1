import React from 'react'
import { styled } from 'styled-components'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom : 50px;
    img {
      width : 70%;
    }
`
const Buttons = styled.div`
  display: flex;
  gap: 10px;
`
const Desc = styled.p`
  width : 50%;
  text-align: center;
`
const MainContent = ({ content }) => {
  const navigate = useNavigate()
  return (
    <Container className='main-content'>
      <img src={content.img} />
      <h1>{content.title}</h1>
      <Desc>{content.desc}</Desc>
      <Buttons>
      {content.buttonVal.map((value, idx) =>(
        <Button label={value} onClick={()=>navigate(`/detail/${content.id}`)}/>
      ))}
      </Buttons>
    </Container>
  )
}

export default MainContent
