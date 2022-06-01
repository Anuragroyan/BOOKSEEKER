import React, {useEffect , useState}  from 'react';
import {  Grid, CircularProgress , Card, CardContent, CardMedia,  Typography} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getbooks } from '../../Redux/actions/books/bookActions';

const Bookdisplay = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const [ currentId, setCurrentId ] = useState(0);
    
    useEffect(() => {
       dispatch(getbooks()); 
    },[ currentId,dispatch]);
    return (
     !books.length ? <CircularProgress/> : (
         <Grid container alignItems="stretch" spacing={3} style={{marginRight:"-12px",marginBottom:"25px"}}>
             {books.map((post) => (
                 <Grid key={post._id} item  xs={3} style={{marginRight:"15px", width:"auto", marginLeft:"74px",marginTop:"33px",padding:"23px"}}>
                   <div post={post} setCurrentId={setCurrentId}>
                    <Card style={{width:"375px",marginBottom:"-25px",marginRight:"-13px",padding:"12px"}} >
                    <CardMedia title={post.title} style={{fontStyle:"italic",textAlign:"center"}} />
                    <div style={{marginTop:"12px",fontSize:"12px",fontStyle:"italic"}}>
                    <Typography variant="h5"><b>{post.author}</b></Typography>
                    <Typography variant="body2"><b>{moment(post.createdAt).fromNow()}</b></Typography>
                   <div style={{borderRadius:"12px"}}>
                   <img src={post.selectedFile} width="250px" height="250px"/>
                   </div>
                  <Typography variant="h6"><b>{post.createdBy}</b></Typography>
                 </div>
                <CardContent style={{marginTop:"-14px"}}>
                <Typography variant="body1"><b>{post.AboutBook}</b></Typography>
                </CardContent>
               <div style={{marginTop:"-14px"}}>
                <Typography variant="body4"><b>{post.category}</b></Typography><br/>
                <Typography variant="body4"><b>Rs: {post.Price}</b></Typography>
              </div>
             </Card>
                   </div>
                 </Grid>
             ))}
         </Grid>
     )
    );
};

export default Bookdisplay;