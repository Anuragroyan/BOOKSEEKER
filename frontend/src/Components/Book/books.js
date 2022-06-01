import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ListBook from './listBook';

const Books = ({ setCurrentId }) => {
    const books = useSelector((state) => state.books);
    console.log(books);
  return(
    !books.length ? <CircularProgress /> : (
      <Grid  container alignItems="stretch" spacing={2} style={{width:"1040px",marginBottom:"23px",padding:"17px",cellSpacing:"12px"}}>
        {books.map((post) => (
          <Grid key={post._id} item xs={8}  md={4} >
            <ListBook post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Books;