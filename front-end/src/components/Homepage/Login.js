import { Form } from 'react-bootstrap';
import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlID="email">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control type="email" placeholder="enter email" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        LOGIN
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login

