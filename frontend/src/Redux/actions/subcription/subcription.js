import { SUBCRIPTION_FETCH, MAKE_SUBCRIPTION, APPROVE_SUBCRIBE} from '../actionTypes';

import * as api from '../../api/subcription';

export const getsubcriptions = () => async (dispatch) => {
  try {
      const { data } = await api.fetchsubcription();
      dispatch({ type: SUBCRIPTION_FETCH, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

export const createsubcription = (plan) => async (dispatch) => {
  try {
      const { data } = await api.createsubcription(plan);
     dispatch({ type: MAKE_SUBCRIPTION, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};


export const approvesubcribe = (id) => async (dispatch) => {
  try {
      await api.approvesubcribe(id);
      
      dispatch({ type: APPROVE_SUBCRIBE,payload: id});
  } catch (error) {
   console.log(error.message);
  }
};