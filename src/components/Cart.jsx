import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delCart } from '../redux/action';
import {NavLink} from "react-router-dom";

 const Cart = () =>{
    const state = useSelector((state)=> state.handlecart);
  
    const dispath = useDispatch();
    const handleClose =(item)=>{
          dispath(delCart(item))
    }

    const cartItems = (cartItem) =>{
        return(
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
               <div className='container'>
                     <button className='btn-close float-end' arial-label="Close" onClick={()=>handleClose(cartItem)}></button>
                     <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px"/>
                        </div>
                        <div className='col-md-4'>
                            <h3>{cartItem.title}</h3>
                            <p className='lead'>$ {cartItem.price}</p>
                        </div>
                     </div>
               </div>
            </div>
        )
    }
    const emptyCart =()=>{
        return(
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className='container py-4'>
                  <div className='row py-5'>
                       <h3>Your Cart is empty</h3>
                  </div>
                </div>
            </div>
        )
    }
    const button =()=>{
        return(
            <div className='container'>
                <div className='row'>
                     <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed to check out</NavLink>
                </div>
            </div>
        )
    }

  return (
    <div>
       {state.length ===0 && emptyCart()}
       {state.length !==0 && state.map(cartItems)}
       {state.length !==0 && button()}
    </div>
  )
}
export default Cart;