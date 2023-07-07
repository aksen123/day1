import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchBox = () => {

  const [searchName, setSearchName] = useState('')

  const dispatch = useDispatch()
  const getName = (e) => {
    e.preventDefault()

    dispatch({ type: 'SEARCH', payload: { searchName } })
  }

  return (
    <Form onSubmit={getName}>
      <Row>
        <Col lg={10}>
          <Form.Control value={searchName} onChange={(e)=>setSearchName(e.target.value)} type='text' placeholder='이름을 입력해주세요'/>
        </Col>
        <Col lg={2}>
          <Button type='submit'>찾기</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
