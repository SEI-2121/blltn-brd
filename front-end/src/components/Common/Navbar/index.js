import React from 'react'
import { Navbar, Nav, Button} from 'react-bootstrap'
import './Nav.css'
import image from '../../../images/favicon.ico'


function Navigation(props) {
    console.log(props);
   
    return (
        <div>
            <Navbar className="color" id="navbar-wrapper">
             
                <Navbar.Brand className="logo" href="/">{<img src={image} alt="Logo" />}</Navbar.Brand>
                <Nav className="text-white">
                    {
                        props.location.pathname === "/"
                            ? <h3 className="text-white" id="text-left">Welcome!</h3>
                            :
                            props.location.pathname === "/user"
                                ? <h3 className="text-white">Hi, User</h3>
                                : null

                    }
                    
                    {
                            props.location.pathname === "/login"
                                    ? <div id="home-nav"><h3 className="text-white">Home</h3></div>
                                : null

                    }
                </Nav>
              
                <div>
                {
                    props.location.pathname === "/"
                            ? <Nav.Link href="/login"><Button className="login" variant="light">Login</Button></Nav.Link>
                    : [
                        props.location.pathname === "/user"
                            ? <Nav.Link href="/logout"><Button className="logout" variant="light">Logout</Button></Nav.Link>
                        : null
                    ]
                }
                </div>
            </Navbar>
        </div>
    )
}

export default Navigation
