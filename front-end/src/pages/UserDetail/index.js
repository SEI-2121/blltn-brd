import React, { Component } from 'react'
import './style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class UserDetail extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 className='nav'>Nav</h2>
        </div>
        <Container className="userContainer">
          <Row>
            <Col className="userCard">user card</Col>
          </Row>
          <Row>
            <Col className="social">social links</Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className='bio'>Bio</Col>
          </Row>
          <Container className='projectContainer'>
            <Row>
              <Col>project search bar</Col>
            </Row>
            <Row>
              <Col>user project index</Col>
            </Row>
          </Container>
        </Container>
      </div>
    )
  }
}