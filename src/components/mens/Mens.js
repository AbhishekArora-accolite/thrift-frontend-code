import React, { useState, useEffect } from 'react'
import axios from "axios";
import Product from '../product/Product';
import './Mens.css';
import Listview from '../listview/Listview';

const baseURL = "http://localhost:8082/thrift/products/mens";

function Mens() {
  
  const [bool, setBool] = useState(true)
  const [viewType, setViewType] = useState("grid")
  const [products, setProducts] = useState([]);

  function changeView() {
    if (viewType === "grid") setViewType("list");
    else if (viewType === "list") setViewType("grid");
    setBool(!bool);
  }

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
        <button onClick={() => changeView()} className='all-btn-change-view'>Change View</button>
        <div className={bool ? 'products' : 'list-view'}>
        {products.map((product) => (
          <>
            {viewType === "grid" ?
              (<Product key={product.productId} data={product} />) :
              (<Listview key={product.productId} data={product} />)
            }
          </>
        ))}
      </div>
    </div>
  )

}

export default Mens