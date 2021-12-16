import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./navigation.css";

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><span className='text-highlight'>Electronics</span> Store</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About Us</Nav.Link>
                    <Nav.Link href="#pricing">Protfolio</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;