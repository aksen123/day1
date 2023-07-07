import React from 'react'
import { useSelector } from 'react-redux'
const Box2 = () => {
  const count = useSelector(state => state.count)
  return (
    <div>
      Box2 : {count}
    </div>
  )
}

export default Box2
