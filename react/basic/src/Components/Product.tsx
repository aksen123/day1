import React from 'react'
import {useSearchParams} from 'react-router-dom'
const Product = () => {
  const [query, setQuery] = useSearchParams()
  console.log(query.get('page'))
  return (
    <div>
      <h1>Show All Product</h1>
    </div>
  )
}

export default Product
