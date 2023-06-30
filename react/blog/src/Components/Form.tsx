import React, { PropsWithRef } from 'react'
import { styled } from 'styled-components'
import Button from './Button'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
`;
const Background = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
background-color: rgb(0, 0, 0, 0.75);
`
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`
const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`
const InputGroup = styled.div`
  margin-bottom: 16px;
`
const Label =styled.div`
  font-size :1.2rem;
`
const Input = styled.input`
  font-size: 1.2rem;
`
const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
`
interface Props {
  readonly onClose?: ()=> void;
}

const Form = ({onClose}: Props) => {
  return (
    <Container>
      <Background>
        <Contents>
          <Title>블로그 글 등록</Title>
          <InputGroup>
            <Label>title :</Label>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Label>body :</Label>
            <Input type="text" />
          </InputGroup>
          <Actions>
            <Button onClick={onClose} label='등록하기'></Button>
            <Button onClick={onClose}  label='닫기'></Button>
          </Actions>
        </Contents>
      </Background>
    </Container>
  )
}

export default Form
