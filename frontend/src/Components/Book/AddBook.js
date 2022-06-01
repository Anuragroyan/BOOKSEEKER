import React, { useState, useEffect } from 'react';
import { TextField,Button,Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createbooks,updatedbook} from '../../Redux/actions/books/bookActions';
import swal from 'sweetalert';
import abbok from '../Book/21635-middle.png';
const AddBook = ( { currentId, setCurrentId} ) => {
   const  [bookdata, setbookdata] = useState({category:'', title:'', author:'', selectedFile:'', createdBy:'', AboutBook:'', Price:'', File:''});
   const book = useSelector((state) => (currentId ? state.books.find((AboutBook) => AboutBook._id === currentId): null));
   const dispatch = useDispatch();
   const maxlimit = 30;
   const minlimit = 5;
   const titlelimit = 89;
   const categorys = 30;
   const pricelimit = 3;
   const about = 70;
  

   useEffect(()=> {
   if (book) setbookdata(book);
   },[book]);

   const clear = () => {
    setCurrentId(null);
    setbookdata({category:'', title:'', author:'', selectedFile:'', createdBy:'', AboutBook:'', Price:'',File:''});
   };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(currentId) {
            dispatch(updatedbook(currentId, bookdata));
          } else {
           dispatch(createbooks(bookdata));
          }
          clear();
          Message();
       }
      
      
 const Message = () => {
  swal({
      title:"Book is stored Successfully",
      text:"thanks for adding books!!!",
      icon:abbok,
      });
    } 
        return(
        <>
        <Paper style={{padding:"2px", marginRight:"7px", marginLeft:"310px", marginTop:"47px",marginBottom:"22px", borderRadius:"23px", width:"430px", backgroundColor:"wheat"}}>
            <form  onSubmit={handleSubmit}>
              <Typography variant="h5" style={{fontSize:"21px",fontStyle:"oblique",marginTop:"20px"}}><b>{currentId ? 'Editing' : 'Provide'} Details For Books</b></Typography>
              <TextField name="createdBy" variant="outlined" style={{width:"320px", margin:"6px 0",fontSize:"-12px"}} label="createdBy" value={bookdata.createdBy} onChange={(e) => setbookdata({ ...bookdata, createdBy:e.target.value})} helperText="provide the createdby name" inputProps={{maxLength:maxlimit,minLength:minlimit,pattern:"[A-Za-z ]*$"}} required/>
              <TextField name="title" variant="outlined" style={{width:"320px", margin:"7px 0"}} label="title" value={bookdata.title} onChange={(e) => setbookdata({ ...bookdata, title:e.target.value})} helperText="provide the title name" inputProps={{maxLength:titlelimit,pattern:"[A-Za-z ]*$"}} required/>
              <TextField name="author" variant="outlined" style={{width:"320px", margin:"7px 0"}} label="author" value={bookdata.author} onChange={(e) => setbookdata({ ...bookdata, author:e.target.value})} helperText="provide the author name" inputProps={{maxLength:titlelimit,pattern:"[A-Za-z ]*$"}} required/>
              <TextField name="category" variant="outlined" style={{width:"320px", margin:"7px 0"}} label="category" value={bookdata.category} onChange={(e) => setbookdata({ ...bookdata, category:e.target.value})} helperText="provide the book category" inputProps={{maxLength:categorys}} required/>
              <TextField name="AboutBook" variant="outlined" style={{width:"320px", margin:"7px 0", marginBottom:"12px"}} label="AboutBook" value={bookdata.AboutBook} onChange={(e) => setbookdata({ ...bookdata, AboutBook:e.target.value})} helperText="provide the about the book" inputProps={{maxLength:about}}  required/>
              <TextField name="Price" variant="outlined" style={{width:"320px", margin:"7px 0", marginBottom:"12px"}} label="Price" value={bookdata.Price} onChange={(e) => setbookdata({ ...bookdata, Price:e.target.value})} helperText="provide the price" inputProps={{maxLength:pricelimit,pattern:"^[0-9]+$"}} required/>
              <div  style={{width:"480px", float:"justify", marginLeft:"-6px", marginBottom:"-13px"}}><span style={{fontSize:"18px",fontWeight:"bolder"}}>Image Upload </span><FileBase type="file" multiple={false} onDone={({ base64 }) => setbookdata({ ...bookdata, selectedFile: base64 })} required/></div><br/>
              <div  style={{width:"480px", float:"justify", marginLeft:"-6px", marginBottom:"-13px"}}><span style={{fontSize:"18px",fontWeight:"bolder"}}>PDF Upload </span><FileBase type="file" multiple={false} onDone={({ base64 }) => setbookdata({ ...bookdata, File: base64 })} required/></div><br/>
              <Button variant="contained" style={{margin:"5px 0",width:"220px"}} color="primary"  size="auto" type="submit" fullwidth onClick={Message}><b>Add-Book</b></Button><br/>
              <Button variant="contained" style={{margin:"5px 0",width:"220px"}} color="secondary"  size="auto"  fullwidth  onClick={clear}><b>Clear</b></Button>
            </form>
        </Paper>
        </>
    );
}

export default AddBook;