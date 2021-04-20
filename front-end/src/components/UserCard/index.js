import React, { Component } from 'react'



export default class UserCard extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=User Photo" />
        <Card.Body>
          <Card.Title>User Name</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Location: Anywhere, USA</ListGroupItem>
        </ListGroup>
      </Card>
    )
  }
}