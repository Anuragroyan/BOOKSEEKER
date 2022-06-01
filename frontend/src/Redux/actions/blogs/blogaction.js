import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../actionTypes';

import * as api from '../../api/blog';

export const getblogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchblogs();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createblog = (post) => async (dispatch) => {
  try {
    const { data } = await api.createblog(post);
    dispatch({ type: CREATE, payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export const updateblog = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateblog(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeblog = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeblog(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteblog = (id) => async (dispatch) => {
  try {
    await api.deleteblog(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};