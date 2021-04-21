import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NewProject from '../../components/ProjectCard/NewProject.js'

export default function NewProjectPage() {
    return (
        <Container>
            <Row>
                <Col><h1>New Project</h1></Col>
            </Row>
            <Row>
                <Col><NewProject /></Col>
            </Row>
        </Container>
    )
}
