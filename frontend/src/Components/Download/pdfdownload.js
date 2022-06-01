import React, { useState, useEffect} from 'react';
import {  Grid,  Card, CardMedia,  Typography, Button} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getbooks } from '../../Redux/actions/books/bookActions';
import { updateCurrentDownload } from  '../../Redux/actions/users/usersActions';


const Pdfdownload = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const [ currentId, setCurrentId ] = useState(0);


    useEffect(() => {
       dispatch(getbooks()); 
    },[ currentId,dispatch]);

    
 
     const onhandlesubmit =  async (e) => {
        // e.preventDefault();
        dispatch(updateCurrentDownload(localStorage.getItem('userAuthData')._id))
        setTimeout(()=> window.location.reload(),1500);
     }
    
    

    return(
        <div>
            <Grid container alignItems="stretch" spacing={1} style={{marginRight:"-15px",marginBottom:"25px"}}>
            
             { books?
             books.map((post) => (
                 <Grid key={post._id} item  xs={3} style={{marginRight:"13px", width:"auto", marginLeft:"74px",marginTop:"33px",padding:"23px"}}>
                   <div post={post} setCurrentId={setCurrentId}>
                    <Card style={{width:"375px",marginBottom:"-25px",marginRight:"-13px",padding:"12px"}} >
                    <CardMedia title={post.title} style={{fontStyle:"italic",textAlign:"center"}} />
                <div style={{marginTop:"12px",fontSize:"12px",fontStyle:"italic"}}>
                    <Typography variant="h5"><b>{post.author}</b></Typography>
                   <div style={{borderRadius:"12px"}}>
                       <img src={post.selectedFile} width="250px" height="250px" type="application/pdf"/>
                   </div>
                   </div>
               <div style={{marginTop:"14px"}}>
                <Typography variant="body4"><b>{post.category}</b></Typography><br/>
                <Typography variant="body4"><b>Rs: {post.Price}</b></Typography><br/>
            </div>
            {console.log('cd',JSON.parse(localStorage.getItem('userAuthData')).currentDownload)} 
            {console.log('cl',JSON.parse(localStorage.getItem('userAuthData')).currentLimit)} 
            {JSON.parse(localStorage.getItem('userAuthData')).currentDownload  === JSON.parse(localStorage.getItem('userAuthData')).currentLimit  ? 
            (<Button variant="contained" color="primary"  size="auto" type="select" fullwidth disabled  style={{marginTop:"12px"}} onClick={onhandlesubmit} >
              <a href={post.File} download> Download </a>
            </Button>):(<Button variant="contained" color="primary"  size="auto" type="select"  fullwidth  style={{marginTop:"12px"}} onClick={onhandlesubmit} >
              <a href={post.File} download> Download </a>
            </Button> )}
            
             </Card>
        </div>
            </Grid>
             )) : null
            }
         </Grid>
        </div>
    );
};

export default Pdfdownload;