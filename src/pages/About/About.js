import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Sheard/Footer/Footer';
import Navigation from '../Sheard/Navigation/Navigation';
import aboutImg from '../../images/hasanali.jpg';
import './about.css'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container className='my-5'>
                <h2 className='text-center pb-4'>About <span className='text-highlight'>Us</span></h2>
                <Row className='align-items-center'>
                    <Col xs={12} md={6}>
                        <div className="about-content">
                            <h2><span className='text-highlight'>About</span> Me!!!</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum porro quos atque, excepturi fugit, error sed, rem nihil doloremque laboriosam accusamus reiciendis laudantium eaque qui ut dolores at! Accusamus quam ullam dolor voluptatibus possimus odio, ex ipsam, unde minima et, adipisci ut. Reprehenderit ut quod illo expedita corporis voluptate aperiam.</p>
                            <Link to='/contact'>
                                <button className='box-button1'>Contact Me!!</button>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="about-image text-center">
                            <img src={aboutImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default About;