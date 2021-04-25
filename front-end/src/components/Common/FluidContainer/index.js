import React from 'react'
import './FluidContainer/style.css'
import { Container, Row, Col } from 'react-bootstrap'

function ContainerWrapper(props) {
    return (

        <Container >
            <Row>
                <Col className="content-container">{props.children}</Col>
            </Row>
        </Container>

    )
}

export default ContainerWrapper
