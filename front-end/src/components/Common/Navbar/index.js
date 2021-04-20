import React from 'react'
import { Navbar, Nav, Button} from 'react-bootstrap'
import './Nav.css'
import image from '../../../images/favicon.ico'
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation(props) {
    console.log(props);
   
    return (
        <div>
            <Navbar className="color" variant="dark">
            {
                props.location.pathname === "/"
                        ? <h3 className="home" style={{ color: 'white' }}>Welcome!</h3>
                    :
                    props.location.pathname === "/user"
                        ? <h3 className="user" style={{ color: 'white' }}>Hi, User</h3>
                        : null

            }
                <Navbar.Brand className="logo" href="/">{<img src={image} alt="Logo" />}</Navbar.Brand>
                <Nav className="mr-auto">
                {
                        props.location.pathname === "/login"
                            ? <h3 className="log" style={{ color: 'white' }}>Home</h3>
                            : null

                }
                </Nav>
                {
                    props.location.pathname === "/"
                            ? <Nav.Link href="/login"><Button className="login" variant="light" style={{float:'right'}}>Login</Button></Nav.Link>
                    : [
                        props.location.pathname === "/user"
                            ? <Nav.Link href="/logout"><Button className="logout" variant="light" style={{ float: 'right' }}>Logout</Button></Nav.Link>
                        : null
                    ]
                }
            </Navbar>
        </div>
    )
}

export default Navigation
