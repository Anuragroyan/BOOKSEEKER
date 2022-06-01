import React from 'react';
import Product from './Product/Product';
import { connect } from 'react-redux';

;
const Products = ({products}) => {
  return (
        <>
        <div> 
        {products.map((prod) =>(
           <Product key={prod.id} productData={prod}/>
        ))}
        </div>
       </> 
    );
};


const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
export default connect(mapStateToProps)(Products);