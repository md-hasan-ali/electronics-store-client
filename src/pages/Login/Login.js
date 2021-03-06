import React, { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Sheard/Footer/Footer';
import Navigation from '../Sheard/Navigation/Navigation';
import './login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoadding } = useAuth();

    const handleOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmit = (e) => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    return (
        <>
            <Navigation></Navigation>
            <Container className='py-5'>
                <div className="section-title text-center">
                    <h2 className='pb-5'>Please <span className='text-highlight'>Login</span> </h2>
                </div>
                <Row>
                    <Col xs={12} md={6} className='mx-auto'>
                        {isLoadding ?
                            <div className='text-center'>
                                <Spinner animation="border" variant="danger" />
                            </div>
                            :
                            <form className='login-form' onSubmit={handleSubmit}>
                                <input
                                    placeholder='Your Email'
                                    type="text"
                                    name="email"
                                    onChange={handleOnchange}
                                />
                                <input
                                    placeholder='Your Password'
                                    type="password"
                                    name="password"
                                    onChange={handleOnchange}
                                />
                                <button
                                    className='box-button1'
                                    type='submit'
                                >
                                    Login
                                </button>

                                <Link to="/register" style={{ textDecoration: 'none' }}>
                                    <button className='text-button'>New user? Please Register.</button>
                                </Link>
                            </form>}
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </>
    );
};

export default Login;