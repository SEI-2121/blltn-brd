import { Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            valid: true,
        }
    }
    handleEmail = (e) => {
        this.setState({username: e.target.value});
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value});
    }

    checkPassword = (e) => {
        e.preventDefault();
        let pwLength = this.state.password.length;
        if (pwLength < 7) {
            this.valid = false;
            alert("Password must be at least 7 characters.")
            this.setState();
        } else if (pwLength > 7) {
            this.valid = true;
            alert("Login successful.");
            this.setState();
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>EMAIL</Form.Label> 
                        <br />
                        <br />
                        <Form.Control autoFocus type="email" placeholder="johndoe@gmail.com" onChange={this.handleEmail}/>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="password">
                        <Form.Label>PASSWORD</Form.Label>
                        <br />
                        <br />
                        <Form.Control type="password" placeholder="password" onChange={this.handlePassword}/>
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit" onClick={this.checkPassword}>
                        LOGIN
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login

