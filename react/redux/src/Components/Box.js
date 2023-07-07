import React from 'react'
import { useSelector } from 'react-redux'
import Box2 from './Box2'
const Box = () => {
  const count = useSelector((state) =>state.count)
  return (
    <h1>
      Box : {count}
      <Box2 />
    </h1>
  )
}

export default Box
