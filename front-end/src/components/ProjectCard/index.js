import React, { Component } from 'react'
import './style.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class ProjectCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Project Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <Button variant="primary">Go To Proj</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}