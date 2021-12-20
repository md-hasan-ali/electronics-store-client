import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Phone = () => {
    const phones = [
        {
            "id": 1,
            "img": "https://i.ibb.co/Cb2fZcf/jonas-leupe-w-K-elt11p-F0-unsplash.jpg",
            "name": "Phone-1"
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/KzsGkmK/vojtech-bruzek-J82-Gxqnw-KSs-unsplash.jpg",
            "name": "Phone-2"
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/V3ZjBXS/Mobile-Phone-Apple-i-Phone-7-Red-with-Rose-Background.jpg",
            "name": "Phone-3"
        },
    ]
    return (
        <>
            <Container>
                <Row xs={1} md={3}>
                    {phones.map(phone =>
                        <Col key={phone.id}>
                            <img style={{ width: "100%", height: '270px' }} src={phone.img} alt="" />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default Phone;