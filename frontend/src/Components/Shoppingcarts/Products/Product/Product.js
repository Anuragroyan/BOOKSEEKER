import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, loadCurrentItem } from '../../../../Redux/actions/cart/cartAction';


const Product = ({productData, addToCart, loadCurrentItem}) => {
  return (
      <>
      <div className="container">
       <div>
           <img src={productData.imgurl} alt="" className="i1"/>
       </div>
       <div className="product_info">
        <p className="title_info">{productData.title}</p>
        <p className="desc_category">{productData.category}</p>
        <p className="desc_info">{productData.description}</p>
        <p className="price_info">Rs {productData.price}</p>
       </div>
       <div className="button">
            <button className="cart" onClick={() => addToCart(productData.id)}>Add To Cart</button><br/>
           <Link to={`/product/${productData.id}`}>
               <button className="view"  onClick={() => loadCurrentItem(productData)}>
                   View Item
                </button>
           </Link>
       </div>
      </div>  
      </>
    );
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default  connect(null, mapDispatchToProps)(Product);