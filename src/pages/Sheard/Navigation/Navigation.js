import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./navigation.css";

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><span className='text-highlight'>Electronics</span> Store</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/allProducts">All Products</Nav.Link>
                    <Nav.Link as={Link} to="/Contact">Contact Us</Nav.Link>

                    <Nav.Link as={Link} to="/login" className='login-button'>Login</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;