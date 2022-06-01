import React from 'react';
import Navbar from '../Navbar/Navbar';
import './SingleItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../../Redux/actions/cart/cartAction';
const SingleItem = ({currentItem, addToCart}) => {
  return (
        <>
        <Navbar/>
        <div className="app">
       <div>
           <img src={currentItem.imgurl} alt="" className="photo"/>
       </div>
       <div className="product1_info">
        <p className="title1_info">{currentItem.title}</p>
        <p className="desc1_category">{currentItem.category}</p>
        <p className="desc1_info">{currentItem.description}</p>
        <p className="price1_info">Rs {currentItem.price}</p>
       </div>
       <div className="button1">
            <button className="cart" onClick={() => addToCart(currentItem.id) }>
              Add To Cart
            </button><br/>
       </div>
      </div>  
        </>
    );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);