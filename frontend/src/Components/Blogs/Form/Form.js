import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createblog, updateblog } from '../../../Redux/actions/blogs/blogaction';
import FileBase from 'react-file-base64';
import swal from 'sweetalert';
import msg from '../Form/images.png';
const Form = ( { currentId, setCurrentId}) => {
    const [blogdata, setblogdata] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: ''});
    const blog = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const maxlimit = 14;
    const minlimit = 5;
    const msglimit = 300;
    const tilelimit = 29;
    const taglimit = 30;
   
    useEffect(()=> {
     if (blog) setblogdata(blog);
    },[blog]);

    const clear = () => {
        setCurrentId(null);
        setblogdata({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };

   

      const handleSubmit = async (e) => {
       e.preventDefault();
       if(currentId) {
         dispatch(updateblog(currentId, blogdata));
       } else {
        dispatch(createblog(blogdata));
       }
       clear();
       Message();
    }
    
    const Message = () => {
      swal({
          title:"Review is  stored Successfully",
          text:"Thanks for Review of Book!!!",
          icon:msg,
      });
   }
  return(
    <Paper style={{padding:"12px", marginTop:"auto", marginRight:"22px", borderRadius:"23px"}}>
    <form  onSubmit={handleSubmit}>
      <Typography variant="h6" style={{fontSize:"28px",fontStyle:"oblique",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>{currentId ? 'Editing' : 'Provide'} the Review</Typography>
      <TextField name="creator" style={{width:"320px", margin:"6px 0"}} variant="outlined" label="Creator" fullWidth value={blogdata.creator} onChange={(e) => setblogdata({ ...blogdata, creator:e.target.value})}  inputProps={{maxLength:maxlimit,minLength:minlimit,pattern:"[a-zA-Z ]*$"}} helperText="provide the creator name" required/>
      <TextField name="title"  style={{width:"320px", margin:"6px 0"}} variant="outlined" label="Title" fullWidth value={blogdata.title} onChange={(e) => setblogdata({ ...blogdata, title:e.target.value})} inputProps={{maxLength:tilelimit,pattern:"[a-zA-Z ]*$"}} helperText="provide the book title" required />
      <TextField name="message" style={{width:"320px", margin:"6px 0"}} variant="outlined" label="Message" fullWidth multiline rows={4} value={blogdata.message} onChange={(e) => setblogdata({ ...blogdata, message:e.target.value})}  inputProps={{maxLength:msglimit}}  helperText="provide the message for books" required/>
      <TextField name="tags"  style={{width:"320px", margin:"6px 0"}} variant="outlined" label="Tags (coma separated)" fullWidth value={blogdata.tags} onChange={(e) => setblogdata({ ...blogdata, tags:e.target.value.split(',')})} helperText="provide the tags" inputProps={{maxLength:taglimit}} helperText="provide the tag " required />
      <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setblogdata({ ...blogdata, selectedFile: base64 })} required /></div>
      <Button variant="contained" style={{margin:"6px 0",width:"320px"}} color="primary" size="auto" type="submit" fullWidth onClick={Message}>Submit</Button><br></br>
      <Button variant="contained"  style={{margin:"6px 0",width:"320px"}}color="secondary" size="auto" fullWidth onClick={clear}>Clear</Button>
    </form>
  </Paper>
  );
};

export default Form;