import React, { Component } from 'react'

import ProjectCard from '../../ProjectCard/index.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './style.css'

export default class ProjectIndex extends Component {
  render() {
    return (
      <div>
        <Container className="proj-cont">
          <Row>
            <Col>
              <Navbar justify="true" bg="light" expand="sm">
                <Navbar.Brand href="#home">Search My Projects</Navbar.Brand>
                <Form inline>
                  <FormControl size="sm" type="text" placeholder="Project Name" className="mr-sm-2" />
                  <Button size="sm" variant="outline-success">Search</Button>
                </Form>
              </Navbar>
            </Col>
          </Row>
          <Row className="card-row">
            <Col className="card"><ProjectCard /></Col>
            <Col className="card"><ProjectCard /></Col>
            <Col className="card"><ProjectCard /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}