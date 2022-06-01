import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography , Grow , Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from '../Blogs/Posts/Posts';
import Form from '../Blogs/Form/Form';
import Books from '../Blogs/pexels.jpg';
import { getblogs } from '../../Redux/actions/blogs/blogaction';

const Blog = () => {
    const dispatch = useDispatch();
    const [ currentId, setCurrentId ] = useState(0);
    
    useEffect(() => {
       dispatch(getblogs()); 
    },[ currentId,dispatch]);
  return (
      <Container style={{ maxHeight: "100%", maxWidth:"100%"}}>
          <AppBar position="static" color="primary">
              <Typography variant="h1" align="center" style={{padding:"16px", marginTop:"-12px", fontSize:"43px",fontFamily:"cursive",fontVariant:"all-petite-caps"}}>Review for Books</Typography>
          </AppBar>
          <Grow in>
              <Container class="bg_image"
                   style={{
                     backgroundImage: 'url('+Books+')',
                     backgroundRepeat:"repeat",
                     height: "100%",
                     weight:"100%",
                     color: "red",
                     marginBottom:"17px"
                   }}>
                  <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                    <Grid item xs={12} sm={7}>
                       <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                  </Grid>
              </Container>
          </Grow>
      </Container>
  );
};

export default Blog;