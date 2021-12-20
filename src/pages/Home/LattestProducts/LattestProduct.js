import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './lattestProduct.css'

const LattestProduct = () => {
    return (
        <>
            <Container className='my-5'>
                <h2 className='text-center pb-4'>Lattest <span className='text-highlight'>Products</span></h2>
                <div className="newProductButton">
                    <Link to='/phone'>
                        <button>Phone</button>
                    </Link>
                    <Link to='/laptop'>
                        <button>Laptop</button>
                    </Link>
                    <Link to='/microphone'>
                        <button>Microphone</button>
                    </Link>
                </div>
                <Outlet></Outlet>

            </Container>
        </>
    );
};

export default LattestProduct;