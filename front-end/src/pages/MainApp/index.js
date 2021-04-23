import React from "react";
import "./style.css";
import UserDetail from "../UserDetail";
import Testing from "../Testing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../Homepage/index.js';
import Navbar from '../../components/Common/Navbar';
import Header from '../../components/Common/Homepage/Header.js';
import About from '../About/index.js';
import EditProject from "../EditProjects";
import LoginPage from "../Login/index.js"
import NewProjectPage from "../NewProject/index.js"


export default function App(props) {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Route path="/" component={Navbar}/>
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
            <Route path="/editproject">
              <EditProject />
            </Route>
            <Route path="/projects/new" component={NewProjectPage}/>
            <Route path="/login">
              <LoginPage />
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
