import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


export default class UserCard extends Component {
  render() {
    return (
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  thumbnail />
        <Card.Body>
          <Card.Title>User Name here</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Location: Anywhere, USA</ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}