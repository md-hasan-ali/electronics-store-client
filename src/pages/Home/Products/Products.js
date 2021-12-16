import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='services-area py-5'>
            <Container>
                <div className="text-center section-title">
                    <h2 className='pb-5'>Our <span className='text-highlight'>Services</span></h2>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product =>
                            <Col key={product._id}>
                                <Card className='h-100'>
                                    <Card.Img variant="top" src={product?.img} />
                                    <Card.Body>
                                        <Card.Title><strong>Name: </strong>{product?.name}</Card.Title>
                                        <Card.Text>
                                            <strong>Description: </strong>{product?.desc}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Price: </strong>{product?.price}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <button className='box-button1'>Purchase Now</button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;