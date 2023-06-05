import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import './Listview.css'
import axios from "axios";

function Listview(props) {

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
        <div className='list-container'>
            <img src={imageLink} alt='prod-image' className='img' />
            <div className='list-description'>
                <b style={{ width: "70%" }}>{productTitle}</b>
                <div className="quantity-desc">
                    <span className='minus' onClick={() => handleMinus()}><AiOutlineMinus /></span>
                    <span className='num'>{quantity}</span>
                    <span className='plus' onClick={() => handlePlus()}><AiOutlinePlus /></span>
                </div>
            </div>
            <div className='list-right-section'>
                <span>₹ {price}/-</span>
                <button className='list-view-btn'>Add To Cart</button>
            </div>
        </div>
    )
}

export default Listview