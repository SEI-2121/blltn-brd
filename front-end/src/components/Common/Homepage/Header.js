import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="whole">
        <Jumbotron>
          <div>
            <img src="https://user-images.githubusercontent.com/3163892/114476406-c4ef2d80-9bbf-11eb-9c7a-e1eea57d1a27.png" alt="Blltn-Brd Logo"></img>
          </div>
        </Jumbotron>
      </div>
    </div>
  );
}