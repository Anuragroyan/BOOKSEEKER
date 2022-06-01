import { PAYMENT_FETCH, MAKE_PAYMENT,APPROVE_PAYMENT} from '../actionTypes';

import * as api from '../../api/payment';

export const getpayments = () => async (dispatch) => {
  try {
      const { data } = await api.fetchpayments();
      dispatch({ type: PAYMENT_FETCH, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

export const createpayment = (pay) => async (dispatch) => {
  try {
      const { data } = await api.createpayment(pay);
     dispatch({ type: MAKE_PAYMENT, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

export const paymentApprove = (id) => async (dispatch) => {
  try {
      await api.approvepayment(id);
      
      dispatch({ type: APPROVE_PAYMENT,payload: id});
  } catch (error) {
   console.log(error.message);
  }
};
