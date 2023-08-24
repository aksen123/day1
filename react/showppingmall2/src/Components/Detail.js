import React from 'react'
import { styled } from 'styled-components'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom : 50px;
    img {
      width : 100%;
    }
    p {
      width: 50%;
    }
`
const ImageBox = styled.div`
  width : 100%;
  display: flex;
  gap: 10px;
    img {
      width: 50%;
      height: 500px;
    }
`
const Detail = () => {

const {id} = useParams();
console.log(id);
const [detail, setDetail] = useState(null);


  const getDetail = async() => {
    let url = `http://localhost:3004/MainItem/${id}`
    let response = await fetch(url);
    let data  = await response.json();

    setDetail(data);
    // console.log(data, detail)
  }
  useEffect(()=>{
    getDetail()
  },[])
  if(detail === null) return (<h1>Loading</h1>)
  return (
    <Container>
      <img src={detail.img} />
      <h1>{detail.title}</h1>
      <p>{detail.desc}</p>
      <ImageBox className='detail-wrap'>
      <img src={detail.detailImg1} />
      <img src={detail.detailImg2} />
      </ImageBox>
      <h1>{detail.detailTitle}</h1>
      <p>{detail.detailDesc}</p>
    </Container>
  )
}

export default Detail
