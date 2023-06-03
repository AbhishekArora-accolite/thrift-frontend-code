import React, { useState, useEffect } from 'react'
import axios from "axios";
import Product from '../product/Product';
import './Mens.css';

const baseURL = "http://localhost:8082/thrift/products/mens";

function Mens() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
        <div className='you-searched-text'>
          <span style={{ fontStyle: "italic" }}>You Searched</span> <span style={{ fontWeight: "bold" }}>"Mens"</span>
        </div>
        <div className='products'>
            { products.map((product) => (
              <Product key={product.productId} data={product}/>
            )) }
        </div>
    </div>
  )

}

export default Mens