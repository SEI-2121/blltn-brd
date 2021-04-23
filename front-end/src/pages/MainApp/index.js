import React from "react";
import "./style.css";
import UserDetail from "../UserDetail";
import Testing from "../Testing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../Homepage/index.js';
import Navbar from '../../components/Common/Navbar';
import Header from '../../components/Common/Homepage/Header.js';
import About from '../About/index.js';
import LoginPage from "../Login/index.js"
import ProjectDetail from "../ProjectDetail";

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
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/project/:id">
              <ProjectDetail />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}



function Users() {
  return <h2>Users</h2>;
}
