import React, { useEffect , useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Books from './books';
import { getbooks } from '../../Redux/actions/books/bookActions';
import AddBook from './AddBook';

const Displaybook = () => {
    const dispatch = useDispatch();
    const [ currentId, setCurrentId ] = useState(0);
    
    useEffect(() => {
       dispatch(getbooks()); 
    },[ currentId,dispatch]);
    return (
        <Container style={{ maxHeight: "100%", maxWidth:"100%"}}>
            <Grow in >
              <Container  style={{marginLeft:"-42px", padding:"23px"}}>
                  <Grid container alignItems="stretch" spacing={4} >
                    <Grid item  xs={12} sm={7}>
                       <Books setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <AddBook currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                  </Grid>
              </Container>
          </Grow>
      </Container>
    );
}

export default Displaybook;