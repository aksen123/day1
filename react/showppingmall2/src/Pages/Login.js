import React from 'react'
import logo from '../jordan.svg'
import { styled } from 'styled-components'
import { useState,useEffect } from 'react'
import Button from '../Components/Button'
const Container = styled.div`
display: flex;
flex-direction : column;
margin: 10px auto;
width: 460px;
height: 700px;
border: 1px solid #000;
padding: 30px;
  span {
    margin-right : 5px;
  }
  input {
    display : block;
    margin-top : 20px;
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
  const [country, setCountry] = useState('대한민국');

  // const getCountry = async() => {
  //   let url = `https://mu-star.net/upload/20200511/country.json`;
  //   let response = await fetch(url);
  //   let data = await response.json();

  //   console.log(data)
  // }
  // useEffect(()=>{
  //   getCountry()
  // },[])
  return (
    <Container>
      <div className='logo'>
      <img width={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjVfjIrPRFPKE6-4xtCSm4cIqF9PTQQXJqw&usqp=CAU'/>
      <img width={50} src={logo} />
      </div>
      <h2>가입 또는 로그인을 위해 이메일을 입력하세요.</h2>
      <span>{country}</span>
      <label for='country'>변경</label>
      <select id='country' autocomplete='off'>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input type='email' placeholder='이메일'/>
      <p>계속 진행하면 나이키의 개인정보 처리방침 및 이용 약관에 동의하게 됩니다</p>
      <Button label='계속'/>
    </Container>
  )
}

export default Login
