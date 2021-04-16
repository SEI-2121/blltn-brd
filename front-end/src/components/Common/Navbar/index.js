import React from 'react'
import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap'
import './Nav.css'
function Navigation() {
    return (
        <div>
            <Navbar className="color" variant="dark">
                <Navbar.Brand href="/home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/user-details">User</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Navigation
