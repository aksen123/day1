import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button } from 'react-bootstrap'

const ContactItem = ({list}) => {
  return (
    <div>
      
      <Row>
        <Col lg={1}>
          <img width={50} src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'/>
        </Col>
        <Col lg={11}>
          <div>{list.name}</div>
          <div>{list.phone}</div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem
