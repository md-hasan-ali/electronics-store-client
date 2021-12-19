import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Sheard/Footer/Footer';
import Navigation from '../Sheard/Navigation/Navigation';
import { useForm } from "react-hook-form";
import './ProductDetails.css';
import useAuth from '../../hooks/useAuth';

const ProductDetails = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [productDetail, setProductDetail] = useState();
    useEffect(() => {
        fetch(`https://floating-atoll-84142.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data[0]))
    }, [id]);

    const onSubmit = data => {
        data.status = 'pending';
        fetch('https://floating-atoll-84142.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Confirm Successfully..');
                }
                navigate('/dashboard/myOrders');
            })

    };

    return (
        <div>
            <Navigation></Navigation>
            <Container className='py-5'>
                <div className="setion-title text-center">
                    <h2 style={{ fontSize: '45px' }} className='pb-5'>Place <span className='text-highlight'>Order</span> </h2>
                </div>
                <Row className="g-4">
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Img style={{ height: "100%" }} variant="top" src={productDetail?.img} />
                            <Card.Body>
                                <Card.Title><strong>Name: </strong>{productDetail?.name} </Card.Title>
                                <Card.Text>
                                    <strong>Description: </strong>{productDetail?.desc}
                                </Card.Text>
                                <Card.Text className='text-highlight' style={{ fontSize: '30px' }}>
                                    <strong>Price: {productDetail?.price}</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="booking-form text-center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="User Name" {...register("User_name")} required />

                                <input defaultValue={user?.email} {...register("Email_Name", { required: true })} required />

                                <input placeholder="Product Name" {...register("Product_Name", { required: true })} required />

                                {errors.exampleRequired && <span>This field is required</span>}
                                <input placeholder='Phone Number' {...register("Phone")} required />

                                <textarea placeholder='Address' style={{ height: '120px' }} {...register("address")} required />

                                <button className='box-button1 order-button' type="Submit">Place Order</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;