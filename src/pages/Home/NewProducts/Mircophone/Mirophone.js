import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Mirophone = () => {
    const microphones = [
        {
            "id": 1,
            "img": "https://i.ibb.co/8jYbTJq/Microphone-in-front-of-the-sound-mixer-and-computers-in-broadcasting-radio-studio-New-radio-station.jpg",
            "name": "Microphone-1"
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/7VzPgbt/kelly-sikkema-p44-B3-PKChs4-unsplash.jpg",
            "name": "Microphone-2"
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/DKYrm1g/2017-Studio-Recording-Studio-Microphone-Sound-Recording-Equipment-Radio-Station.jpg",
            "name": "Microphone-3"
        },
    ]
    return (
        <>
            <Container>
                <Row xs={1} md={3}>
                    {microphones.map(microphone =>
                        <Col key={microphone.id}>
                            <img style={{ width: "100%", height: '270px' }} src={microphone.img} alt="" />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default Mirophone;