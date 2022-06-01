import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import img_admin from '../Author/author.jfif';
import {  getpayments,paymentApprove } from '../../Redux/actions/payment/payment';

const Admin = () => {
    const payments = useSelector((State) => State.payments);
    const dispatch = useDispatch();
    const [ currentId, setCurrentId ] = useState(0);

    useEffect(() => {
        dispatch(getpayments());
    },[currentId,dispatch]);

    return (
        <>
        <h1 style={{fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Admin</h1>
        <img src={img_admin} width="1480px" height="450px"/><br/><br/>
        <a href='/subcribe'>Approve the Subcriptions</a><br/><br/>
        <Paper style={{width:"1470px",height:"auto",marginLeft:"207px",padding:"-12px"}}>
    <Table style={{width:"1285px"}}>
      <TableHead>
        <TableRow style={{fontFamily:"cursive",fontVariant:"all-petite-caps"}}>
          <TableCell align="right"><b>USER_ID</b></TableCell>
          <TableCell align="right"><b>PAYMENT_ID</b></TableCell>
          <TableCell align="right"><b>CREATED_AT</b></TableCell>
          <TableCell align="right"><b>USER Name</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody style={{textAlign:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>
      {payments.map((pay) => (
          <TableRow pay={pay} setCurrentId={setCurrentId}>
            <TableCell align="right"><b>{pay.userId}</b></TableCell>
            <TableCell align="right"><b>{pay._id}</b></TableCell>
            <TableCell align="right"><b>{pay.createdAt}</b></TableCell>
            <TableCell align="right"><b>{pay.name}</b></TableCell>
          </TableRow>
      ))}
      </TableBody>
    </Table>
  </Paper><br/>
        </> 
    );
};


export default Admin;