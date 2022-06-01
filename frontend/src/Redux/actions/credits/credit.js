import { CREATE_REWARD, FETCH_REWARDS} from '../actionTypes';

import * as api from '../../api/credit';

export const getrewards = () => async (dispatch) => {
    try {
        const { data } = await api.fetchcredit();
        dispatch({ type: FETCH_REWARDS, payload: data});
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
  
  export const createcredit = (credit) => async (dispatch) => {
      try {
          const { data } = await api.createcredit(credit);
         dispatch({ type: CREATE_REWARD, payload: data});
      } catch (error) {
        console.log(error.message);
      }
    };