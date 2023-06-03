import React, { useState, useEffect } from 'react'
import './All.css';
import axios from "axios";
import Product from '../product/Product';

const baseURL = "http://localhost:8082/thrift/products";

function All() {

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
          <span style={{ fontStyle: "italic" }}>You Searched</span> <span style={{ fontWeight: "bold" }}>"All"</span>
        </div>
        <div className='products'>
            { products.map((product) => (
              <Product key={product.productId} data={product}/>
            )) }
        </div>
    </div>
  )
}

export default All