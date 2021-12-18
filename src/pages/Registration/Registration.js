import React, { useState } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Sheard/Footer/Footer';
import Navigation from '../Sheard/Navigation/Navigation';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoadding, user } = useAuth();

    const handleOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmit = (e) => {
        if (loginData.password !== loginData.confirm_password) {
            alert('Your Password is did not match');
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <>
            <Navigation></Navigation>
            <Container className='py-5'>
                <div className="section-title text-center">
                    <h2 className='pb-5'>Please <span className='text-highlight'>Register</span> </h2>
                </div>
                <Row>
                    <Col xs={12} md={6} className='mx-auto'>
                        {!isLoadding && <form className='login-form' onSubmit={handleSubmit}>
                            <input
                                placeholder='Your Email'
                                type="email"
                                name="email"
                                required
                                onChange={handleOnchange}
                            />
                            <input
                                placeholder='Your Password'
                                type="password"
                                name="password"
                                required
                                onChange={handleOnchange}
                            />
                            <input
                                placeholder='Confirm Password'
                                type="password"
                                name="confirm_password"
                                onChange={handleOnchange}
                                required
                            />
                            <button
                                className='box-button1'
                                type='submit'
                            >
                                Register
                            </button>
                            <Link to='/login' style={{ textDecoration: 'none' }}>
                                <button className='text-button'>Already Registerd? Please Login.</button>
                            </Link>
                        </form>}
                        {
                            isLoadding &&
                            <div className='text-center'>
                                <Spinner animation="border" variant="danger" />
                            </div>
                        }
                        {
                            user?.email && [
                                'success',
                            ].map((variant, idx) => (
                                <Alert className='mt-4' key={idx} variant={variant}>
                                    User Account Created Successfully.
                                </Alert>
                            ))
                        }
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </>
    );
};

export default Registration;