import React, { useState } from 'react'
import './Product.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import axios from "axios";

function Product(props) {

    const { productId, imageLink, price, productQuantity, productTitle } = props.data;

    const [quantity, setQuantity] = useState(productQuantity)

    function handlePlus() {
        axios
            .put(`http://localhost:8082/thrift/products/incById/${productId}`, props.data)
            .then((response) => {
                console.log(response.data);
                props.data.productQuantity = response.data.productQuantity;
                setQuantity(response.data.productQuantity);
            });
    }

    function handleMinus() {
        if (quantity > 0) {
            axios
                .put(`http://localhost:8082/thrift/products/decById/${productId}`, props.data)
                .then((response) => {
                    console.log(response.data);
                    props.data.productQuantity = response.data.productQuantity;
                    setQuantity(response.data.productQuantity);
                });
        }
    }

    return (
        <div className='product'>
            <img src={imageLink} alt='image' className='prod-img' />
            <div className='description'>
                <p>
                    <b>{productTitle}</b>
                    <br />
                    <span style={{ fontSize: "1.2rem" }}>₹ {price}</span>
                </p>
            </div>
            <div className="quantity">
                <p className="quantity-desc">
                    <span className='minus' onClick={() => handleMinus()}><AiOutlineMinus /></span>
                    <span className='num'>{quantity}</span>
                    <span className='plus' onClick={() => handlePlus()}><AiOutlinePlus /></span>
                </p>
            </div>
            <button className="addToCartBtn">
                Add To Cart
            </button>
        </div>
    )
}

export default Product