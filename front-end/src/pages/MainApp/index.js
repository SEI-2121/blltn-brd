import React from "react";
import "./style.css";
import UserDetail from "../UserDetail";
import Testing from "../Testing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from '../../components/Homepage/index.js';

export default function App() {
  return (
    <div>
     
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/testing">Testing</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/user/:id">
              <UserDetail />
            </Route>
            <Route path="/testing">
              <Testing />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
