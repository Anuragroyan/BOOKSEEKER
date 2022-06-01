import React from 'react';
import './Dashboard.css';
import img1_dash from '../Dashboard/download.jfif';
import img2_dash from '../Dashboard/books.png';
import img3_dash from '../Dashboard/novel.jpg';
import img4_dash from '../Dashboard/Indian.png';
import img5_dash from '../Dashboard/books.jpg';
const Dashboard = () => {
    return(
        <>
        <div id="demo" className="carousel slide" data-ride="carousel">
           <ul className="carousel-indicators" style={{marginBottom:"-27px"}}>
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1" ></li>
            <li data-target="#demo" data-slide-to="2" ></li>
            <li data-target="#demo" data-slide-to="3" ></li>
            <li data-target="#demo" data-slide-to="4" ></li>
           </ul>
           <div className="carousel-inner">
               <div className="carousel-item active">
                  <img src={img1_dash} width="1480px" height="450px"/>
               </div>
               <div className="carousel-item ">
                  <img src={img2_dash} width="1480px" height="450px" />
               </div>
               <div className="carousel-item ">
                  <img src={img3_dash} width="1480px" height="450px" />
               </div>
               <div className="carousel-item ">
                  <img src={img4_dash} width="1480px" height="450px" />
               </div>
               <div className="carousel-item ">
                  <img src={img5_dash} width="1480px" height="450px" />
               </div>
           </div>   
       </div>
       <div style={{marginTop:"33px", width:"1480px"}}>
        <div className="container-dashboard" style={{width:"1090px",marginLeft:"274px"}}>
         <p style={{backgroundColor:"darkslategray", textAlign:"justify"}}>
         <div style={{fontSize:"21px",marginLeft:"234px"}}><i  class="fas fa-book"><b style={{marginLeft:"25px"}}>Book recommendations of Readers choice</b></i></div>
            <div style={{marginLeft:"234px",fontSize:"21px"}}><i class="fas fa-clipboard"><b style={{marginLeft:"25px"}}>Subcription Plan for Readers</b></i></div> 
            <div style={{marginLeft:"234px",fontSize:"21px"}}><i class="fas fa-shopping-cart"><b style={{marginLeft:"25px"}}>Purchase of Books</b></i></div> 
            <div style={{marginLeft:"234px",fontSize:"21px"}}><i class="fas fa-download"><b style={{marginLeft:"25px"}}>Download Pdf-Form of Books</b></i></div> 
         </p>
        </div>
       </div>
       </>
    );
};

export default Dashboard