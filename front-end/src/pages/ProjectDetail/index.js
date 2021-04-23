import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export default class ProjectDetail extends Component {
  render() {
    return (
      <div>
        <Container className="projectContainer">
          <Row>
            <Col>
              <Row className="picture">
                <Image
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  thumbnail
                />
                <Link to="/user/testingpath">Username</Link>
                <Link to="/user/testingpath">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Location: Anywhere, USA</ListGroupItem>
                  </ListGroup>
                  <Button variant="outline-primary">Back to Projects</Button>{" "}
                </Link>
              </Row>
            </Col>
            <Col>
              <Row className="bio">Bio</Row>
              <Row className="projectContainer">
                <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            fugiat architecto, distinctio esse labore reiciendis obcaecati
            necessitatibus aperiam quas quae libero, non quis repudiandae
            doloremque sint corporis expedita aspernatur quia?{" "}
          </p>
          <Link to="/user/testingpath">Web URL</Link>
          <Link to="/user/testingpath">Source Code</Link>
          <ul>
            Tech Used
            <li>This</li>
            <li>That</li>
            <li>The Other</li>
          </ul>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
