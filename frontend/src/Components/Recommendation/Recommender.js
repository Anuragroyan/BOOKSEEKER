import React, { useState } from 'react';
import './Recommender.css';
import book_1 from './recommend.jpg';


const Recommender = () => {
   return(
   <>
    <div className="recommends">
    <h1 className="recommends">Book Recommender</h1>
    <img src={book_1} height="440px" width="1050px" />
     <p className="results"><a href="http://127.0.0.1:5000">Recommendations</a></p>
   </div>
   </>
   );
};
     

export default Recommender;
