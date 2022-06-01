import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getsubcriptions } from '../../Redux/actions/subcription/subcription';
import { Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Viewplan = () => {
    const subcribes = useSelector((state) => state.subcribes);
    const dispatch = useDispatch();
    const [ currentId, setCurrentId ] = useState(0);

    useEffect(() => {
        dispatch(getsubcriptions()); 
     },[ currentId,dispatch]);
    return(
    <>
    <br/><br/>
     <Paper style={{width:"990px",height:"auto",marginLeft:"410px",padding:"-12px"}}>
    <Table style={{width:"920px"}}>
      <TableHead>
        <TableRow style={{fontFamily:"cursive",fontVariant:"all-petite-caps"}}>
          <TableCell align="right"><b>USER_ID</b></TableCell>
          <TableCell align="right"><b>USERName</b></TableCell>
          <TableCell align="right"><b>PlanName</b></TableCell>
          <TableCell align="right"><b>Duration</b></TableCell>
          <TableCell align="right"><b>Price</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody style={{textAlign:"justify",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>
      {subcribes.map((plan) => (
          <TableRow plan={plan} setCurrentId={setCurrentId}>
            <TableCell align="right"><b>{plan.userId}</b></TableCell>
            <TableCell align="right"><b>{plan.user_name}</b></TableCell>
            <TableCell align="right"><b>{plan.ptype}</b></TableCell>
            <TableCell align="right"><b>{plan.Duration}</b></TableCell>
            <TableCell align="right"><b>{plan.price}</b></TableCell>
          </TableRow>
      ))}
      </TableBody>
    </Table>
  </Paper><br/>
    </>
    );
};


export default Viewplan;