import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./style.css";


export default class ProjectCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "14em" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Project Title</Card.Title>
            <Card.Text>
              Some quick example text
            </Card.Text>
            <Link to="/project/:id">
            <Button variant="primary">Go To Proj</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
