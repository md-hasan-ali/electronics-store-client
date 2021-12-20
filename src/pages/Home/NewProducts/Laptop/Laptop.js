import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Laptop = () => {
    const laptops = [
        {
            "id": 1,
            "img": "https://i.ibb.co/Lv46W0Z/xps-8pb7-Hq539-Zw-unsplash-1.jpg",
            "name": "Laptop-1"
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/GWcRRr2/alex-knight-j4uu-Kn-N43-M-unsplash.jpg",
            "name": "Laptop-2"
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/qyrHxrY/Stack-of-used-laptops-in-different-colors-and-models-Tha-notebooks-for-repair-and-service.jpg",
            "name": "Laptop-3"
        },
    ]
    return (
        <>
            <Container>
                <Row xs={1} md={3}>
                    {laptops.map(laptop =>
                        <Col key={laptop.id}>
                            <img style={{ width: "100%", height: '270px' }} src={laptop.img} alt="" />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default Laptop;