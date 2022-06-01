import { PAYMENT_FETCH, MAKE_PAYMENT,APPROVE_PAYMENT} from '../../actions/actionTypes';

export default ( payments = [], action ) => {
    switch( action.type) {
        case PAYMENT_FETCH:
            return action.payload;
        case MAKE_PAYMENT:
            return [...payments, action.payload]; 
        case APPROVE_PAYMENT:
            return payments.filter((pay) => pay._id !== action.payload);    
        default:
            return payments;       
    }
};