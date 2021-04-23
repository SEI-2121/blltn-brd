import React from 'react'
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import NewProject from '../../components/ProjectCard/NewProject.js'

export default function NewProjectPage() {
    return (
        <Container>
            <Row>
                <Col><h1>New Project</h1></Col>
            </Row>
            <Row>
                <Col><NewProject {...props} /></Col>
            </Row>
        </Container>
    )
}
