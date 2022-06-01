import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import plan from '../Subcription/image.jpg';
import { createsubcription } from '../../Redux/actions/subcription/subcription';
import { Button, Paper, TextField } from '@material-ui/core';
const Applyplan = ({ currentId }) => {
    const [ subcriptiondata , setsubcriptiondata ] = useState({  ptype:'',price:'', mobileno:'', Address:'',Duration:'',currentLimit:4,currentDownload:0});
    const subcribes = useSelector((state) => (currentId ? state.subcribes.find((ptype) => ptype._id === currentId): null));
    const dispatch = useDispatch();
    const pricelimit = 4;  
    const planlimit = 20;
    const addresslimit = 300;
    const phone = 10;


    useEffect(() => {
     if (subcribes) setsubcriptiondata(subcribes);
    },[subcribes]);


    
 const onhandlesubmit = async (e) => {
    e.preventDefault();
    dispatch(createsubcription(subcriptiondata));
    Message();
 }

 const Message = () => {
   swal({
       title:"Subscription plan is  done Successfully",
       text:"thanks for Subscribe!!!",
       icon:plan,
   });
 }
    return(
        <>
        <div style={{padding:"22px"}}>
        <h1 style={{fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Subscription Form </h1>
        </div>
        <div>
            <form style={{width:"460px",height:"490px", paddingLeft:"575px",marginLeft:"98px"}} onSubmit={onhandlesubmit}>
            <Paper style={{width:"365px",height:"470px", padding:"23px"}}>
                <TextField type="text"  placeholder="plan type" value={subcriptiondata.ptype}  onChange={(e) => setsubcriptiondata({ ...subcriptiondata, ptype:e.target.value})} inputProps={{maxlength:planlimit,pattern:"[A-Za-z ]*$"}} helperText="choose the plan type" required/><br/><br/>
                <TextField type="text"  placeholder="mobile number" value={subcriptiondata.mobileno}  onChange={(e) => setsubcriptiondata({ ...subcriptiondata, mobileno:e.target.value})} inputProps={{maxlength:phone,pattern:"^(0|91|\+91)?-?[789]\d{9}$"}} helperText="provide the mobile number" required/><br/><br/>
                <TextField type="text"  placeholder="Address" value={subcriptiondata.Address}  onChange={(e) => setsubcriptiondata({ ...subcriptiondata, Address:e.target.value})} inputProps={{maxlength:addresslimit,pattern:"[A-Za-z ]*$"}} helperText="provide the address" required/><br/><br/>
                <TextField type="text"  placeholder="plan price" value={subcriptiondata.price}  onChange={(e) => setsubcriptiondata({ ...subcriptiondata, price:e.target.value})} inputProps={{maxlength:pricelimit,pattern:"^[0-9]+$"}} helperText="provide the price for plans" required/><br/><br/>
                <TextField type="text"  placeholder="plan duration" value={subcriptiondata.Duration}  onChange={(e) => setsubcriptiondata({ ...subcriptiondata, Duration:e.target.value})} inputProps={{pattern:"^[0-9]+$"}} helperText="provide the duration for plans" required/><br/><br/>
                <Button variant="contained" color="primary"  size="auto" type="select" fullwidth onDBClick={Message}><i class="fa fa-check-circle"> <b>Submit</b></i></Button>
            </Paper>
            </form>
        </div>
        </>
    );
};

export default Applyplan;