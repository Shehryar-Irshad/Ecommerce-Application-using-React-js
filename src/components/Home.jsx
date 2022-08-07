import React from 'react';
import Footer from './Footer';
import home from "./images/home.jpg";
import Products from './Products';

export default function Home() {
  return (
    <div className='hero'>
     <div className="card text-bg-dark">
        <img src={home} className="card-img" alt="home back pic" height="550px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
         <div classNameName='container'>
            <h5 className="card-title display-4 fw-bolder mb-0 mr-2 text-dark">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2 text-dark">
                CHECK OUT ALL TRENDS
            </p>
         </div>
        </div>
     </div>
     <Products/>
     <Footer/>
    </div>
  )
}
