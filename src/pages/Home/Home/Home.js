import React from 'react';
import Footer from '../../Sheard/Footer/Footer';
import Navigation from '../../Sheard/Navigation/Navigation';
import Banner from '../Banner/Banner';
import LattestProduct from '../LattestProducts/LattestProduct';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <LattestProduct></LattestProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;