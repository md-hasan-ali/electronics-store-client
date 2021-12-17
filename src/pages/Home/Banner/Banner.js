import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import iphone from '../../../images/iphone.png';
// import laptop from '../../../images/mac-laptop-removebg-preview.png'
import './Banner.css';


const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className='banner-area'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    // fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                // mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 200,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 100,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 3,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={7}>
                        <div className="banner-content">
                            <h1>This is our <span className='text-highlight'>Electronics </span>Store</h1>
                            <p style={{ marginBottom: '20px' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final </p>
                            <Link to='/aboutUs'>
                                <button className='box-button'>About Us</button>
                            </Link>
                            <Link to='/Contact'>
                                <button className='border-button'>Contact Us</button>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={5}>
                        <div className="image-caption text-center">
                            <img src={iphone} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* <div className="image-caption2">
                <img src={laptop} alt="" />
            </div> */}
        </div>
    );
};

export default Banner;