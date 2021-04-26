import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'



export default class LinkTree extends Component {
  render() {
    return (
      <Card style={{ width: '30rem' }}>
        <Card.Header>Social Links</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item action href="#link1">Handle@Twitter</ListGroup.Item>
          <ListGroup.Item action href="#link1">Handle@Github</ListGroup.Item>
          <ListGroup.Item action href="#link1">Handle@LinkedIn</ListGroup.Item>
          <ListGroup.Item action href="#link1">Handle@Discord</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}