import React from 'react'
import { styled } from 'styled-components'
import LoginHeader from '../Components/LoginHeader'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
const Container = styled.div`
display: flex;
flex-direction : column;
margin: 10px auto;
width: 460px;
height: 500px;
border: 1px solid #eee;
border-radius: 10px;
padding: 30px;
  span {
    margin-right : 5px;
  }
  input {
    display : block;
    margin-top : 50px ;
    padding: 15px 5px;
    width: 100%;
    border : 1px solid #000;
    border-radius : 10px;
    outline: none;
  }
  input:focus {
    border : 1px solid #D30005;
  }
  input:focus::placeholder {
    color :#D30005;
  }
  p {
    color : #000;
    margin: 0;
    display: inline-block;
    margin-right: 10px;
  }
  a {
    color: #aaa;
  }
  Button {
    width: 100px;
    position: relative;
    left : 360px;
    margin-top : 30px;
    }
  }
`

const LoginPassword = () => {
  const [pw, setPw] = useState('')
  let email = useSelector((state) => state.loginId);
  const dispatch = useDispatch()
  const goLogin = () => {
    if(pw.length < 8) {
      alert('비밀번호를 확인해주세요')
    } else {
      dispatch({ type: 'LOGIN', payload: {check : true} })
      navigate('/')
    }
  }
  const navigate = useNavigate();
  return (
    <Container>
      <LoginHeader title='비밀번호를 입력하세요' />
      <div>
      <p>{email}님</p><a href='#'>편집</a>
      <input value={pw} onChange={(e)=>setPw(e.target.value)} type='password' placeholder='비밀번호'/>
      </div>
      <Button label='로그인' onClick={goLogin}/>
    </Container>
  )
}

export default LoginPassword
