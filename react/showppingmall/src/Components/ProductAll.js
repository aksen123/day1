import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
// Container >> 수직 수평 정렬
import 'bootstrap/dist/css/bootstrap.min.css'
const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProduct = async() => {
    let url = 'http://localhost:3004/products';
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data)
    setProductList(data)
    //url 에 담겨있던 json형식의 데이터를 productList에 담아줌
  }
  //화면이 렌더링 될때마다 화면에 가상 서버에서 데이터를 갖고온다
  useEffect(()=>{
    getProduct();
  },[])


  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll