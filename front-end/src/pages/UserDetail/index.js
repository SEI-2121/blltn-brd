import React, { Component } from 'react'
import './style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectIndex from '../../components/Users/ProjectIndex/index.js'
import LinkTree from '../../components/LinkTree/index.js'
import UserCard from '../../components/UserCard/index.js'


export default class UserDetail extends Component {
  render() {
    return (

      <Container className="userContainer">
        <Row>
          <Col>
            <Row className="userCard"><UserCard /></Row>
            <Row className="social"><LinkTree /></Row>
          </Col>
          <Col>
            <Row className="bio">Bio</Row>
            <Row className="projectContainer"><ProjectIndex /></Row>
          </Col>
        </Row>
      </Container>


    )
  }
}