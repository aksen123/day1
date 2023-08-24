import React from 'react'

import { styled } from 'styled-components'
import { useState,useEffect } from 'react'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import LoginHeader from '../Components/LoginHeader'
import { useDispatch } from 'react-redux'
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
    color : #bbb;
  }
  Button {
    width: 100px;
    position: relative;
    left : 360px;
    }
  }
`

const Login = () => {
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('대한민국');
  const navigate = useNavigate()
  // const getCountry = async() => {
  //   let url = `https://mu-star.net/upload/20200511/country.json`;
  //   let response = await fetch(url);
  //   let data = await response.json();

  //   console.log(data)
  // }
  // useEffect(()=>{
  //   getCountry()
  // },[])

  const dispatch = useDispatch();

  const goPassword = async() => {
    if(email === '' || !email.includes('@')){
      alert('이메일 양식을 확인해 주세요')
    } else {
      dispatch({ type: 'EMAIL', payload: { email } })
      await navigate('/loginPw');
    }
  }


  return (
    <Container>
      <LoginHeader title='로그인을 위해 이메일을 입력하세요.' />
      <span>{country}</span>
      {/* 나중에 구현하기 */}
      <label for='country'>변경</label>
      {/* <select id='country' autocomplete='off'>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select> */}
      <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='이메일'/>
      <p>계속 진행하면 나이키의 개인정보 처리방침 및 이용 약관에 동의하게 됩니다</p>
      <Button label='계속' onClick={goPassword}/>
    </Container>
  )
}

export default Login
