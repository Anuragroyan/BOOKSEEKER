import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import wallet from '../payment/images.png';
import { TextField,Button, Paper } from '@material-ui/core';
import { createpayment } from '../../Redux/actions/payment/payment';

const Payment = ( { currentId }) => {
   const [ paymentdata , setpaymentdata ] = useState({ name:'', Cardno:'', date:'', password:'', price:'', subscription:'', cart:''});
   const  payments = useSelector((state) => (currentId ? state.payments.find((name)=> name._id === currentId) : null));
   const dispatch = useDispatch();
   const maxlimit = 14;
   const minlimit = 5;
   const cardno = 16;
   const visa = "^(?:4[0-9]{12}(?:[0-9]{3})? ";
   const amex ="^3[47][0-9]{13}$";
   const master = "^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$";
   const cardpin = 4;
   const pricelimit = 4;
   const cartlimit = 100;


   useEffect(() => {
     if (payments) setpaymentdata(payments);
   },[payments]);

 const onhandlesubmit = async (e) => {
    e.preventDefault();
    dispatch(createpayment(paymentdata));
    Message();
 }

 const Message = () => {
  swal({
    title:"Payment is Successfully",
    text:"Payment is done!!!",
    icon:wallet,
   });
 }



  return(
    <>
       <h1 style={{textAlign:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Payment Form</h1><br/>
       <form style={{width:"470px",height:"585px", paddingLeft:"526px",marginLeft:"206px"}} onSubmit={onhandlesubmit}>
           <Paper style={{width:"470px",height:"614px", padding:"3px"}}><br/>
               <TextField  type="text" value={paymentdata.name} placeholder="name"  style={{width:"350px"}} onChange={(e) => setpaymentdata({ ...paymentdata, name:e.target.value})} inputProps={{maxlength:maxlimit,minlength:minlimit,pattern:"[A-Za-z ]*$"}}   helperText="name length must be between 5 to 14 character"  required/><br/><br/>
               <TextField type="text" value={paymentdata.Cardno} placeholder="card number" style={{width:"350px"}}  onChange={(e) => setpaymentdata({ ...paymentdata, Cardno:e.target.value})} inputProps={{visa,master,amex,maxlength:cardno}} helperText="only Visa, Amex and Mastercard is valid" required/><br/><br/>
               <TextField  type="date" value={paymentdata.date}  style={{width:"350px"}} onChange={(e) => setpaymentdata({ ...paymentdata, date:e.target.value})} helperText="please provide expiry date of your card" required /><br/><br/>
               <TextField type="password" value={paymentdata.password} placeholder="password"  style={{width:"350px"}} onChange={(e) => setpaymentdata({ ...paymentdata, password:e.target.value})} inputProps={{maxlength:cardpin,pattern:"^[0-9]+$"}} helperText="cardpin must be 4 digit" required/><br/><br/>
               <TextField  type="text" value={paymentdata.price} placeholder="bill price"  style={{width:"350px"}} onChange={(e) => setpaymentdata({ ...paymentdata, price:e.target.value})} inputProps={{maxlength:pricelimit,pattern:"^[0-9]+$"}} helperText="provide the price for books" required/><br/><br/>
               <TextField type="text"  value={paymentdata.subscription} placeholder="subscription price" style={{width:"350px"}} onChange={(e) => setpaymentdata({ ...paymentdata, subscription:e.target.value})} inputProps={{maxlength:pricelimit,pattern:"^[0-9]+$"}} helperText="provide the price for subscription plan" required /><br/><br/>
               <TextField type="text"  value={paymentdata.cart} placeholder="cart info" style={{width:"350px"}} onChange={(e) => setpaymentdata({ ...paymentdata, cart:e.target.value})} inputProps={{maxlength:cartlimit,pattern:"^[0-9]+$"}} helperText="provide the cart details" required /><br/><br/>
               <Button variant="contained" style={{margin:"-22px 0",width:"220px", fontSize:"7px"}} color="primary"  size="auto" type="submit" fullwidth onDBClick={Message}><b><i class="fab fa-google-pay fa-3x">Payment</i></b></Button><br/>
           </Paper>
       </form><br/><br/>
    </>
    );
};

export default Payment;