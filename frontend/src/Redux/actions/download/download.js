import { CREATE_DOWNLOAD, FETCH_DOWNLOAD } from '../actionTypes';

import * as api from '../../api/download';

export const getdownloads = () => async (dispatch) => {
  try {
      const { data } = await api.fetchdownload();
      dispatch({ type: FETCH_DOWNLOAD, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};



export const createdownload = (download) => async (dispatch) => {
    try {
        const { data } = await api.createdownload(download);
       dispatch({ type: CREATE_DOWNLOAD, payload: data});
    } catch (error) {
      console.log(error.message);
    }
  };