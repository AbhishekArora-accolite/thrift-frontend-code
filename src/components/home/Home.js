import React from 'react'
import Navbar from '../navbar/Navbar'
import { Banner } from '../assets/banner.jpg'
import './Home.css'
import { useNavigate } from "react-router-dom";

function Home() {

  let navigate = useNavigate(); 
  function routeChange(path) {
    navigate(path);
  }

  return (
    <>
      <div className='background-container'>
        <div className='container'>
          <span className='heading'>
            SALE! SALE! SALE!
          </span>
          <span className='heading' style={{ marginTop: '5%' }}>
            15-20% <br /> DISCOUNTS
          </span>
          <span className='sub-heading'>
            ON ALL PRODUCTS
          </span>
          <button className='shop-btn' onClick={() => routeChange(`/all`)}>SHOP</button>
        </div>
      </div>
      <span className='explore-category'>Explore Categories _______________ </span>
      <div className='categories'>
        <div className='category-container'>
          <div className='category men'>
          </div>
          <div className='text'>
            MEN'S FASHION
            <button className='btn' onClick={() => routeChange(`/mens`)}>SHOP NOW</button>
          </div>
        </div>
        <div className='category-container'>
          <div className='category women'>
          </div>
          <div className='text'>
            WOMEN'S FASHION
            <button className='btn' onClick={() => routeChange(`/womens`)}>SHOP NOW</button>
          </div>
        </div>
      </div>
      <div className='footer'>
        Copyright © 2023 Thrift | Powered by Thrift
      </div>
    </>
  )
}

export default Home