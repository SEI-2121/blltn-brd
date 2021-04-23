import { Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';

class EditProject extends Component {
    constructor() {
        super();
        this.state = {
            project: {
                name: "",
                user: "",
                description: "",
                website: "",
                source: "",
                technologiesUsed: ""
            },
            projectToChange: {
                name: "",
                user: "",
                description: "",
                website: "",
                source: "",
                technologiesUsed: ""
            },
            projects: [],
            Loading: true
        }
    }

    componentDidMount() {
        this.getAllProjects()
    }

    getAllProjects = async () => {
        await fetch('https://blltn-brd.herokuapp.com/projects/').then((response) => response.json()).then((data) => {
            this.setState({
                projects: data,
                Loading: false
            });
        });
    }

    editProject = (projectToChange) => {
        this.setState({ project: projectToChange });
    }

    editName = (e) => {
        this.setState({ name: e.target.value });
    }

    editUser = (e) => {
        this.setState({ user: e.target.value });
    }

    editDescription = (e) => {
        this.setState({ description: e.target.value });
    }
    editWebsite = (e) => {
        this.setState({ website: e.target.value });
    }
    editSource = (e) => {
        this.setState({ source: e.target.value });
    }
    editTechnologiesUsed = (e) => {
        this.setState({ technologiesUsed: e.target.value });
    }

    updateProject = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.projectToChange)
        }
        const response = await fetch('https://blltn-brd.herokuapp.com/projects/'
            + String(this.state.projectToChange._id), requestOptions)
        const responseJson = await response.json()
        if (responseJson) {
            this.getAllProjects()
        }
    }


    render() {
        return (
            <div>
                <Form className="edit-project">
                    <Form.Group className="editProjectForm" controlId="projectName">
                        <Form.Label>Project Name</Form.Label>
                        <br />
                        <Form.Control type="text" placeholder="Project name" onChange={this.editName} />
                    </Form.Group>
                    <Form.Group className="editProjectForm" controlId="projectName">
                        <Form.Label>User Name</Form.Label>
                        <br />
                        <Form.Control type="text" placeholder="User name" onChange={this.editUser} />
                    </Form.Group>
                    <Form.Group className="editProjectForm" controlId="projectDescription">
                        <Form.Label>Description</Form.Label>
                        <br />
                        <Form.Control as="textarea" rows={3} placeholder="Description" onChange={this.editDescription} />
                    </Form.Group>
                    <Form.Group className="editProjectForm" controlId="projectWebsite">
                        <Form.Label>Website URL</Form.Label>
                        <br />
                        <Form.Control as="textarea" rows={1} placeholder="website url" onChange={this.editWebsite} />
                    </Form.Group>
                    <Form.Group className="editProjectForm" controlId="projectSource">
                        <Form.Label>Source Code</Form.Label>
                        <br />
                        <Form.Control as="textarea" rows={1} placeholder="source code" onChange={this.editSource} />
                    </Form.Group>
                    <Form.Group className="editProjectForm" controlId="projectName">
                        <Form.Label>Technologies Used</Form.Label>
                        <br />
                        <Form.Control type="text" placeholder="User name" onChange={this.editTechnologiesUsed} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.editProject}>
                        EDIT PROJECT
                    </Button>
                </Form>
            </div>
        )
    }
}

export default EditProject