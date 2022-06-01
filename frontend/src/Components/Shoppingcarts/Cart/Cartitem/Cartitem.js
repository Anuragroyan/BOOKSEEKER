import React, { useState } from 'react';
import './Cartitem.css';
import { connect } from 'react-redux';
import { removeFromCart,adjustQty } from '../../../../Redux/actions/cart/cartAction';
const Cartitem = ({itemData, removeFromCart, adjustQty}) => {
    const [ input, setInput ] = useState(itemData.qty);

    const onchangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(itemData.id, e.target.value);
    };

    return(
      <div class="main">
        <div>
           <img src={itemData.imgurl} alt={itemData.title}  className="picture"/>
        </div>
           <div className="Info1">
               <div>
                   <p className="title">{itemData.title}</p>
                   <div className="qty">
                        Qty :
                       <input min='1' type="number" className="qty2" value={input}
                        onChange={onchangeHandler} />
                   </div>
                   <p className="desc">{itemData.category}</p>
                   <div className="trash">
                       <button onClick={() => removeFromCart(itemData.id)}>
                       <i class="fas fa-trash fa-2x"></i>
                       </button>
                   </div>
                   <p className="price">Rs {itemData.price}</p>
               </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id,value)),
    };
};

export default connect(null, mapDispatchToProps)(Cartitem);

