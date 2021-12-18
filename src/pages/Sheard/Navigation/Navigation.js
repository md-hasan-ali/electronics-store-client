import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./navigation.css";

const Navigation = () => {
    const { user, Logout } = useAuth();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><span className='text-highlight'>Electronics</span> Store</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/allProducts">All Products</Nav.Link>
                    <Nav.Link as={Link} to="/Contact">Contact Us</Nav.Link>
                    <Nav.Link className='box-button1 ms-3' as={Link} to="/dashboard">Dashboard</Nav.Link>

                    {
                        user?.email ? <Nav.Link onClick={Logout} className='box-button1'>Logout</Nav.Link>
                            :
                            <Nav.Link as={Link} to="/login" className='box-button1'>Login</Nav.Link>
                    }

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;