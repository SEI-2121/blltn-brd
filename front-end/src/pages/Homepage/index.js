import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Signup from '../../components/Common/Homepage/Signup'



export default function HomePage() {
  return (
    <Container>
      <Row>
        <Col><h1>Sign Up</h1></Col>
      </Row>
      <Row>
        <Col><Signup /></Col>
      </Row>
    </Container>
  )
}
