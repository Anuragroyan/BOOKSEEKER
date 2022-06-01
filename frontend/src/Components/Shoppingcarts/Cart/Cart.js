import React, { useState, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import {Link } from 'react-router-dom';
import './Cart.css';
import Cartitem from './Cartitem/Cartitem';
import { connect } from 'react-redux';
const Cart = ({cart}) => {
    const [ totalPrice, setTotalPrice] = useState(0);
    const [ totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.price
        })

        setTotalPrice(price);
        setTotalItems(items);
    },[cart, totalPrice, totalItems, setTotalItems, setTotalPrice])
  return (
        <>
        <Navbar/>
       <div >
           <div>
              {cart.map((item) => (
                 <Cartitem key={item.id} itemData={item}/>
              ))}
           </div>
           <div className="checkout">
               <div className="sum">
                Cart Summary
               </div>
               <p className="total">
                   Total:
               </p>
               <p className="item">
                 ({totalItems} item)
               </p>
               <p className="amt">
                   Rs {totalPrice}
               </p>
               <div className="buttons">
                   <Link to="/payment">
                    <button className="buttons1">Proceed To Checkout</button>
                   </Link>
                </div>
           </div>
       </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);