import { Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
            bio: "",
            profilePic: "",
            location: "",
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createUser = (e) => {
        e.preventDefault()
        if (this.state.passwordConfirm !== this.state.password) {
            alert("Passwords do not match.")
        } else {
            const requestOptions = {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
            };
            fetch('https://blltn-brd.herokuapp.com/user/:id', requestOptions)
                .then(response => response.json())
                .then(createdUser => console.log(createdUser))
        }
    }

    render() {
        return (
            <div>
                <Form className="login-signup">
                    <Form.Group controlId="username">
                        <Form.Label>USERNAME</Form.Label>
                        <Form.Control name="username" type="text" placeholder="johndoe13" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>EMAIL</Form.Label>
                        <br />
                        <Form.Control name="email" type="email" placeholder="johndoe@gmail.com" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="bio">
                        <Form.Label>BIO</Form.Label>
                        <Form.Control name="bio" as="textarea" rows={3} placeholder="A first time developer and engineer" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="profilePic">
                        <Form.Label>PROFILE PICTURE URL</Form.Label>
                        <Form.Control name="profilePic" type="text" placeholder="https://imgur.com/imageurl" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="location">
                        <Form.Label>LOCATION</Form.Label>
                        <Form.Control name="location" type="text" placeholder="Los Angeles, LA" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>PASSWORD</Form.Label>
                        <br />
                        <Form.Control name="password" type="password" placeholder="password" onChange={this.handleChange} />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="passwordConfirm">
                        <Form.Control name="passwordConfirm" type="password" placeholder="re-type password" onChange={this.handleChange} />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit" onClick={this.createUser}>
                        SIGN UP
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Signup


