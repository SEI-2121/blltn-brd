import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Login from '../../components/Common/Homepage/Login.js'



export default function LoginPage() {
    return (
        <Container>
            <Row>
                <Col><h1>Log In</h1></Col>
            </Row>
            <Row>
                <Col><Login /></Col>
            </Row>
        </Container>
    )
}
