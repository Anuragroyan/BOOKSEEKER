import { FETCH_BOOK, CREATE_BOOK, UPDATE_BOOK, DELETE_BOOK, LIKE_BOOK } from '../../actions/actionTypes';

import * as api from '../../api/book';

export const getbooks = () => async (dispatch) => {
    try {
    const { data } = await api.fetchbooks();
    dispatch({ type: FETCH_BOOK,payload: data});
    } catch (error) {
      console.log(error.message);
    }
};

export const createbooks = (post) => async (dispatch) => {
    try {
    const { data } = await api.createbooks(post);    
    dispatch({ type: CREATE_BOOK,payload: data});
    } catch (error) {
       console.log(error.message);
    }
}; 

export const updatedbook = (id, post) => async (dispatch) => {
    try {
     const { data } = await api.updatedbook(id, post);   
     dispatch({ type: UPDATE_BOOK,payload: data});
    } catch (error) {
       console.log(error.message);
    }

};

export const likebook = (id) => async (dispatch) => {
   try {
   const { data } = await api.likebook(id);
   dispatch({ type: LIKE_BOOK,payload: data});
   } catch (error) {
      console.log(error.message);
   }
};

export const deletebook = (id) => async (dispatch) => {
   try {
       await api.deletebook(id);
       
       dispatch({ type: DELETE_BOOK,payload: id});
   } catch (error) {
    console.log(error.message);
   }
};

