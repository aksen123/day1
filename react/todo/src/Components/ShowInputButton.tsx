import React from 'react'
import { styled } from 'styled-components';
import Button from './Button';

const Container = styled.div`
z-index: 1;
position: absolute;
right: 40px;
bottom: 40px;
`
interface Props {
  readonly show : Boolean;
  readonly onClick : ()=> void;
}
const ShowInputButton = ({show, onClick}: Props) => {
  return (
    <Container>
      <Button label={show ? "닫기" : "할 일 추가"} color={show ? '#304ff2' :'#ff5722'} onClick={onClick}/>
    </Container>
  )
}

export default ShowInputButton
