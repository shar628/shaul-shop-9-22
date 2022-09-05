import React from 'react'
import Loading from './Loading';
import './products.css'
import { useContext } from 'react';
import MyContext from '../MyContext';
import { useNavigate } from "react-router-dom";

const Products = ({ addProductToCart }) => {

    const { productsData, filteredProducts } = useContext(MyContext);
    // const addProductToCart = () => {

    // }

    const DisplayProducts = ({ title, price, img, category, description, rating, handleAddProductToCart }) => {
        const navigate = useNavigate();
        // const navigateToCart = () => {
        //     navigate('/cart')
        // }
        return (
            <div className="product-card">
                <div className="product-image" >
                    <img src={img} alt={title} />
                </div>
                <div className="product-info">
                    <h4>{category} </h4>
                    <h5>{title} </h5>
                    {/* <h5> {rating} </h5> */}
                    <h6> {price} </h6>
                    {/* <h6> {rating} </h6> */}
                    <button onClick={handleAddProductToCart} >Add to your cart</button>
                    <button onClick={() => navigate("/cart")}>go to cart</button>

                    <h6>{description} </h6>
                </div>
            </div>
        )
    }

    const customList = filteredProducts.length > 0 ? filteredProducts : productsData

    const productsList = customList.map((element, index) => (
        <DisplayProducts
            title={element.title} key={index}
            img={element.image} price={element.price}
            rating={element.rating} handleAddProductToCart={() => addProductToCart(element)}
            category={element.category} description={element.description}
        />
    ))


    if (!productsData && !filteredProducts) {
        return <Loading />
    }
    // if (loading) {
    //     return <Loading />
    // }
    return (
        <div className="products">
            {/* <Loading /> */}
            {productsList.length === 0 && <Loading />}
            {/* {loading && <Loading />} */}
            {productsList}
        </div>
    )
}

export default Products