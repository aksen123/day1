import React from 'react'
let data = {
  loginId : '',
  loginPw : '',
  loginCheck : false,

}

const reducer = (state = data, action) => {
  const {type, payload} = action
  console.log(payload)
  switch(type) {
    case 'EMAIL' : 
      return {...state, loginId: payload.email}
    case 'LOGIN' : 
      return {...state, loginCheck: payload.check}
    case 'LOGOUT' : 
      return {...state, loginCheck: payload.check}
    default : 
      return {...state}
  }
}

export default reducer
