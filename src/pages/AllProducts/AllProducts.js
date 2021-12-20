import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Sheard/Footer/Footer';
import Navigation from '../Sheard/Navigation/Navigation';
import './allProduct.css'

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://floating-atoll-84142.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>

            <div className=' py-5'>
                <Container>
                    <div className="text-center section-title">
                        <h2 className='pb-5'>Our <span className='text-highlight'>All Products</span></h2>
                    </div>
                    {products.length === 0 ?
                        <div className='text-center'>
                            <Spinner animation="border" variant="danger" />
                        </div>
                        :
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
                                                <Card.Text className='price'>
                                                    <strong>Price: </strong>{product?.price}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Link to={`product/${product._id}`}>
                                                    <button className='box-button1'>Purchase Now</button>
                                                </Link>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>}
                </Container>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default AllProducts;