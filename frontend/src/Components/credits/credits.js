import React, { useState, useEffect} from 'react';
import {  TextField, Button,Paper} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {  createcredit } from '../../Redux/actions/credits/credit';
import swal from 'sweetalert';
import feed from '../credits/download.png';
const Credits = ({currentId}) => {
    const [ creditdata , setcreditdata ] = useState({ name:'',message:'',wallet:''});
    const credits = useSelector((state) => (currentId ? state.credits.find((name) => name._id === currentId): null));
    const dispatch = useDispatch();
    const maxlimit = 14;
    const msglimit = 300;
    const creditlimit = 3;


    useEffect(() => {
        if (credits) setcreditdata(credits);
       },[credits]);



    const onhandlesubmit = async (e) => {
       e.preventDefault();
       dispatch(createcredit(creditdata));
       Message();
    }   
    

    const Message = () => {
        swal({
            title:"Credits are stored Successfully",
            text:"Thanks for Feedback!!!",
            icon:feed,
           });
      }
      
    return(
        <>
        <div style={{padding:"22px"}}>
    <h1 style={{fontFamily:"cursive",fontVariant:"all-petite-caps"}}> Feedback For Authors </h1>
    </div>
    <div>
        <form style={{width:"460px",height:"290px", paddingLeft:"575px",marginLeft:"188px"}} onSubmit={onhandlesubmit}>
        <Paper style={{width:"365px",height:"280px", padding:"37px"}}>
        <TextField  placeholder="username"  value={creditdata.name} onChange={(e) => setcreditdata({ ...creditdata, name:e.target.value})} inputProps={{maxlength:maxlimit}}  helperText="character and number with size 15"  required/>
        <TextField  placeholder="message"   value={creditdata.message} onChange={(e) => setcreditdata({ ...creditdata, message:e.target.value})}  inputProps={{maxlength:msglimit,pattern:"[A-Za-z ]*$"}}  helperText="provide the message for author"   required/><br/>
        <TextField  placeholder="wallets"   value={creditdata.wallet} onChange={(e) => setcreditdata({ ...creditdata, wallet:e.target.value})} inputProps={{maxlength:creditlimit,pattern:"^[0-9]+$"}}  helperText="provide the credit for authors"  required/><br/>
        <Button variant="contained" color="primary"  size="auto" type="select" fullwidth style={{marginTop:"23px"}} onDBClick={Message}><i class='fas fa-check-circle'> <b>Submit</b></i></Button><br/>
        </Paper>
        </form>
        </div>
        </>
    );
};


export default Credits;