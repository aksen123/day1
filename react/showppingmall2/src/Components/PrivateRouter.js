import React from 'react'
import { Navigate } from 'react-router-dom';
import Detail from './Detail';
import { useSelector } from 'react-redux';
const PrivateRouter = () => {
  const loginCheck = useSelector(state => state.loginCheck);
  return loginCheck ? <Detail /> : <Navigate to={'/login'} />
}

export default PrivateRouter
