import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom : 50px;
    img {
      width : 80%;
    }
`
const ImageBox = styled.div`
  width : 80%;
  display: flex;
  gap: 10px;
    img {
      width: 50%;
    }
`
const Detail = () => {
  return (
    <Container>
      <img src='https://newsimg.sedaily.com/2019/12/04/1VRXZ0NDP0_1.jpg' />
      <h1>나중에 추가</h1>
      <p>추가하기</p>
      <ImageBox className='detail-wrap'>
      <img src='https://newsimg.sedaily.com/2019/12/04/1VRXZ0NDP0_1.jpg' />
      <img src='https://newsimg.sedaily.com/2019/12/04/1VRXZ0NDP0_1.jpg' />
      </ImageBox>
      <h1>나중에 추가~</h1>
      <p>나중에 추가</p>
    </Container>
  )
}

export default Detail
