import { Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
            valid: true,
        }
    }

    handleUsername = (e) => {
        this.setState({username: e.target.value});
    }
    handleEmail = (e) => {
        this.setState({email: e.target.value});
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value});
    }
    handlePasswordConfirm= (e) => {
        this.setState({passwordConfirm: e.target.value});
    }

    checkPassword = (e) => {
        e.preventDefault();
        let pwLength = this.state.password.length;
        if (this.state.passwordConfirm !== this.state.password) {
            this.valid = false;
            this.setState();
            alert("Passwords do not match.")
        } else if (pwLength < 7) {
            this.valid = false;
            alert("Password must be at least 7 characters.")
            this.setState();
        } else if (this.state.passwordConfirm === this.state.password) {
            this.valid = true;
            alert("Account created.")
            this.setState();
        }
    }

    render() {
        return (
            <div>
                <Form className="login-signup">
                    <Form.Group controlId="email">
                        <Form.Label>EMAIL</Form.Label> 
                        <br />
                        <Form.Control type="email" placeholder="johndoe@gmail.com" onChange={this.handleEmail}/>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="password">
                        <Form.Label>PASSWORD</Form.Label>
                        <br />
                        <Form.Control type="password" placeholder="password" onChange={this.handlePassword}/>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="passwordConfirm">
                        <Form.Control type="password" placeholder="re-type password" onChange={this.handlePasswordConfirm}/>
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit" onClick={this.checkPassword}>
                        SIGN UP
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Signup


