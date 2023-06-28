import React from 'react'
import {useParams} from 'react-router-dom'
const ProductDetail = () => {
  const params = useParams();
  console.log("ppp", params)
  return (
    <div>
      <h2>{params.id} 페이지입니다</h2>
      <h1>Show Product Detail</h1>
    </div>
  )
}

export default ProductDetail
