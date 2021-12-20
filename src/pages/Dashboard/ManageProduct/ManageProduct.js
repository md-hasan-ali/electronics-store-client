import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [deletedCount, setDeletedCount] = useState(null);

    useEffect(() => {
        fetch('https://floating-atoll-84142.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [deletedCount])
    // delete a single product 
    const handeDeleteProduct = (id) => {
        const proced = window.confirm('Are You sure, You want to delete the product.')
        if (proced) {
            fetch(`https://floating-atoll-84142.herokuapp.com/deleteSingleProduct/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setDeletedCount(true);
                    } else {
                        setDeletedCount(false)
                    }
                })
        }

    }

    return (
        <div>
            <div className=' py-5'>
                <Container>
                    <div className="text-center section-title">
                        <h2 className='pb-5'>Manage <span className='text-highlight'>All Products</span></h2>
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
                                                <button onClick={() => handeDeleteProduct(product?._id)} className='box-button1'>Delete Product</button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>}
                </Container>
            </div>
        </div>
    );
};

export default ManageProduct;