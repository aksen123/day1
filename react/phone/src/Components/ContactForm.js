import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const ContactForm = () => {

  const dispatch = useDispatch()
  const addContact = (e) => {
    e.preventDefault()
    if(name !=='' && phone !== ''){
      dispatch({ type: 'ADD_CONTACT', payload: { name, phone } })
      setName('')
      setPhone('')
    } else if(name === '' || phone === '') {
      alert('내용을 입력해주세요')
    }

  }
  const [name, setName] =useState('') 
  const getName = (event) => {
    setName(event.target.value)
  }
  const [phone, setPhone] =useState('') 
  const getPhone = (event) => {
    setPhone(event.target.value)
  }
  return (
    <Form onSubmit={addContact}>
    <Form.Group className="mb-3" controlId="formName">
      <Form.Label>이름</Form.Label>
      <Form.Control value={name} onChange={getName} type="text" placeholder="이름을 입력해주세요" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formContact">
      <Form.Label>전화번호</Form.Label>
      <Form.Control value={phone} onChange={getPhone} type="text" placeholder="전화번호를 입력해주세요" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>
    <Button variant="primary" type="submit">
      추가
    </Button>
  </Form>
  )
}

export default ContactForm
