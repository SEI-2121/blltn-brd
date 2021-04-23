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
            technologiesUsed: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createProject = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state),
        }
            .then((resp) => resp.json())
            .then((returnedProject) => {
                fetch("http://localhost:3000/projects/", requestOptions);
                alert("Project Created");
                this.setState({ project: [...this.state.project, returnedProject] });
            });
    };

    render() {
        return (
            <div>
                <Form className="create-project">
                    <Form.Group className="newProjectForm" controlId="projectUser">
                        <Form.Label>User</Form.Label>
                        <Form.Control type="text" readOnly defaultValue="logged in username here" />
                    </Form.Group>
                    <Form.Group className="newProjectForm" controlId="projectName">
                        <Form.Label>Project Name</Form.Label>
                        <br />
                        <Form.Control name="name" as="textarea" placeholder="The Habadashery" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="newProjectForm" controlId="projectDescription">
                        <Form.Label>Description</Form.Label>
                        <br />
                        <Form.Control name="description" as="textarea" rows={3} placeholder="The Habadashery is your next stop for men's ties... or something." onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="newProjectForm" controlId="projectWebsite">
                        <Form.Label>Website URL</Form.Label>
                        <br />
                        <Form.Control name="website" as="textarea" rows={1} placeholder="https://thehabadashery.com" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="newProjectForm" controlId="projectSource">
                        <Form.Label>Source Code</Form.Label>
                        <br />
                        <Form.Control name="source" as="textarea" rows={1} placeholder="https://github.com/username/repository" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="newProjectForm" controlId="projectTech">
                        <Form.Label>Technologies Used</Form.Label>
                        <br />
                        <Form.Control name="technologiesUsed" as="textarea" rows={1} placeholder="uhhhh" onChange={this.handleChange} />
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