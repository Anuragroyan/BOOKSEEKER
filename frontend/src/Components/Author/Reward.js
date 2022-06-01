import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getrewards  } from '../../Redux/actions/credits/credit';
import img1_reward from '../Author/inwriter.jpg';
import { Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Reward = () => {
    const  credits = useSelector((state) => state.credits);
    const dispatch = useDispatch();
    const [ currentId, setCurrentId ] = useState(0);

    useEffect(() => {
        dispatch(getrewards()); 
     },[ currentId,dispatch]);
    return(
        <>
         <br/>
        <img src={img1_reward} width="1470px" height="450px"/>
         <br/><br/>
         <div>
       <a href='/author'>Author Information</a>
    </div><br/>
    <Paper style={{width:"770px",height:"auto",marginLeft:"485px",padding:"-12px",background:"grey",borderRadius:"-13px"}}>
     <Table style={{width:"770px",textAlign:"justify"}}>
      <TableHead>
        <TableRow style={{fontFamily:"cursive",fontVariant:"all-petite-caps",textAlign:"center"}}>
          <TableCell align="right"><b>Author_ID</b></TableCell>
          <TableCell align="right"><b>Author Name</b></TableCell>
          <TableCell align="right"><b>Message</b></TableCell>
          <TableCell align="right"><b>Wallets</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody style={{textAlign:"justify",fontFamily:"cursive",fontVariant:"all-petite-caps",textAlign:"center"}}>
      {credits.map((credit) => (
          <TableRow credit={credit} setCurrentId={setCurrentId}>
            <TableCell align="right"><b>{credit.authorId}</b></TableCell>
            <TableCell align="right"><b>{credit.name}</b></TableCell>
            <TableCell align="right"><b>{credit.message}</b></TableCell>
            <TableCell align="right"><b>{credit.wallet}</b></TableCell>
          </TableRow>
      ))}
      </TableBody>
    </Table>
  </Paper><br/>
        </>
    );
};

export default Reward;