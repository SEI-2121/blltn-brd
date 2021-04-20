import React from "react";
import "./style.css";
import UserDetail from "../UserDetail";
import Testing from "../Testing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from '../Homepage/index.js';
import Navbar from '../../components/Common/Navbar';
import Header from '../../components/Common/Homepage/Header.js';

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Navbar />
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
