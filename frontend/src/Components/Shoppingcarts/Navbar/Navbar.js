import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';

const Navbar = ({cart}) => {
    const [ cartCount, setCartCount] = useState(0);

    useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
        count += item.qty;
    });
     setCartCount(count);
    },[cart, cartCount]);

 return (
        <>
        <div style={{marginTop:"12px",marginLeft:"-1290px",background:"#455a64",height:"61px"}}>
            <Link to="/shoppingcart">
                <h2 style={{fontFamily:"cursive",fontVariant:"all-petite-caps",fontSize:"42px"}}>Shopping Cart</h2>
            </Link>
            <Link to="/cart">
                <div style={{marginLeft:"2590px",marginTop:"-53px",fontSize:"35px"}}>
                <i className="fas fa-shopping-cart"></i>  
                <b style={{fontFamily:"cursive",fontVariant:"all-petite-caps",fontSize:"32px"}}>Cart</b>
               <span className="cartlogo_badge">{cartCount}</span>
                </div>
            </Link>
        </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Navbar);