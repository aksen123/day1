import React, { useState } from 'react'
import Greeting from './Greeting'

const LoginButton = (props: any) => {
 return <button onClick={props.onClick}>로그인</button>
}
const LogoutButton = (props: any) => {
 return  <button onClick={props.onClick}>로그아웃</button>
}

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginClick = () => {
    setIsLoggedIn(true)
  }
  const handleLogoutClick = () => {
    setIsLoggedIn(false)
  }

  let button;
  if(isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick}/>
  } else {
    button = <LoginButton onClick={handleLoginClick}/>
  }
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      {button}  
    </div>
  )
}

export default LoginControl
