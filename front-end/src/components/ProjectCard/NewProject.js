import { Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';

class NewProject extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            website: "",
            source: "",
            valid: true
        }
    }
    handleName = (e) => {
        this.setState({name: e.target.value});
    }
    handleDescription = (e) => {
        this.setState({description: e.target.value});
    }
    handleWebsite = (e) => {
        this.setState({website: e.target.value});
    }
    handleSource = (e) => {
        this.setState({source: e.target.value});
    }

    createProject = (e) => {
        e.preventDefault();
        if (this.valid === true) {
            alert("Project Created");
            this.setState();
        }
    }

    render() {
        return (
            <div>
                <Form className="create-project">
                    <Form.Group className="newProjectForm" controlId="projectName">
                        <Form.Label>Project Name</Form.Label> 
                        <br />
                        <Form.Control type="email" placeholder="The Habadashery" onChange={this.handleName}/>
                    </Form.Group>
                    <Form.Group className="newProjectForm" controlId="projectDescription">
                        <Form.Label>Description</Form.Label>
                        <br />
                        <Form.Control as="textarea" rows={3} placeholder="The Habadashery is your next stop for men's ties... or something." onChange={this.handleDescription}/>
                    </Form.Group>
                    <Form.Group className="newProjectForm" controlId="projectWebsite">
                        <Form.Label>Website URL</Form.Label>
                        <br />
                        <Form.Control as="textarea" rows={1} placeholder="https://thehabadashery.com" onChange={this.handleWebsite}/>
                    </Form.Group>
                    <Form.Group className="newProjectForm" controlId="projectSource">
                        <Form.Label>Source Code</Form.Label>
                        <br />
                        <Form.Control as="textarea" rows={1} placeholder="https://github.com/username/repository" onChange={this.handleSource}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.createProject}>
                        CREATE PROJECT
                    </Button>
                </Form>
            </div>
        )
    }
}

export default NewProject