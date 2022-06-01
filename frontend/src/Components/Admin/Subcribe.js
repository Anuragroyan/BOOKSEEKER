import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Button} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import img_admin from '../Author/author.jfif';
import { getsubcriptions, approvesubcribe} from '../../Redux/actions/subcription/subcription';

const Subcription_plan = () => {
    const  subcribes  = useSelector((State) => State. subcribes);
    const dispatch = useDispatch();
    const [ currentId, setCurrentId ] = useState(0);

    useEffect(() => {
        dispatch(getsubcriptions());
    },[currentId,dispatch]);

  return(
      <>
    <h1 style={{fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Admin</h1>
    <img src={img_admin} width="1480px" height="450px"/><br/><br/>
    <a href='/admin'>Payment Details</a><br/><br/>
    <Paper style={{width:"1470px",height:"auto",marginLeft:"207px",padding:"-12px"}}>
<Table style={{width:"1285px"}}>
  <TableHead>
    <TableRow style={{fontFamily:"cursive",fontVariant:"all-petite-caps"}}>
      <TableCell align="right"><b>USER_ID</b></TableCell>
      <TableCell align="right"><b>SUBSCRIPTION_ID</b></TableCell>
      <TableCell align="right"><b>plan type</b></TableCell>
      <TableCell align="right"><b>USERNAME</b></TableCell>
      <TableCell align="right"><b>Approve</b></TableCell>
    </TableRow>
  </TableHead>
  <TableBody style={{textAlign:"center",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>
  { subcribes.map((plan) => (
      <TableRow plan={plan} setCurrentId={setCurrentId}>
        <TableCell align="right"><b>{plan.userId}</b></TableCell>
        <TableCell align="right"><b>{plan._id}</b></TableCell>
        <TableCell align="right"><b>{plan.ptype}</b></TableCell>
        <TableCell align="right"><b>{plan.user_name}</b></TableCell>
        <TableCell align="right">
        <Button variant="contained" style={{margin:"-22px 0",width:"105px", fontSize:"10px", marginRight:"-22px"}} color="primary"  size="auto" type="submit" fullwidth  onClick={() => dispatch(approvesubcribe(plan._id))}><b><i class="fas fa-thumbs-up fa-2x"></i></b></Button>
        </TableCell>
      </TableRow>
  ))}
  </TableBody>
</Table>
</Paper><br/>
</>
  );
};


export default Subcription_plan;