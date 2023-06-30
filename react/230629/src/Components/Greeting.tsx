import React from 'react'

const UserGreeting = () => {
  return <h1>다시 오셨군요!</h1>
}
const GuestGreeting = () => {
  return <h1>회원가입을 해주세요!</h1>
}

const Greeting = (props: any) => {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

export default Greeting
