import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><NavLink to="/" style={{textDecoration:"none",color:"white"}}>Registration</NavLink></Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink to="/login" style={{textDecoration:"none",color:"white",fontSize:'20px',marginLeft:'20px'}}>Login</NavLink>
                            <NavLink to="/user" style={{textDecoration:"none",color:"white",fontSize:'20px',marginLeft:'20px'}}>Users</NavLink>

                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;