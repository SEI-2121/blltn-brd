import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div class="whole">
        <Jumbotron class="center-align responsive-img">
          <div>
            <img src="https://user-images.githubusercontent.com/3163892/114476406-c4ef2d80-9bbf-11eb-9c7a-e1eea57d1a27.png"></img>
          </div>
        </Jumbotron>
      </div>
    </div>
  );
}
