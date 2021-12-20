import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Sheard/Footer/Footer';
import Navigation from '../Sheard/Navigation/Navigation';
import './contact.css'

const Contact = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container className='my-5'>
                <h2 className='text-center pb-4'>Cometact <span className='text-highlight '>Me!!!</span></h2>
                <Row>
                    <Col xs={12} md={8} className='mx-auto'>
                        <div className="contact-from">
                            <form>
                                <input type="text" placeholder='Frist Name' />
                                <input type="text" placeholder='Last Name' />
                                <input type="email" placeholder='Your Email' />
                                <textarea placeholder='Description' rows={5}></textarea>
                                <input type="submit" value="Send Message" className='box-button1' />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </>
    );
};

export default Contact;