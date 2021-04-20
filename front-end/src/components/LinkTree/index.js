import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'



export default class LinkTree extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Header>Social Links</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item action href="#link1">Link 1</ListGroup.Item>
          <ListGroup.Item action href="#link1">Link 2</ListGroup.Item>
          <ListGroup.Item action href="#link1">Link 3</ListGroup.Item>
          <ListGroup.Item action href="#link1">Link 4</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}