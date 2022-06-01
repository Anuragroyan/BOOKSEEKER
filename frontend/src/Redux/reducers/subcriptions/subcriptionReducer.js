import { SUBCRIPTION_FETCH, MAKE_SUBCRIPTION, APPROVE_SUBCRIBE} from '../../actions/actionTypes';

export default ( subcribes = [], action ) => {
    switch( action.type) {
        case SUBCRIPTION_FETCH:
            return action.payload;
        case MAKE_SUBCRIPTION:
            return [...subcribes, action.payload]; 
        case APPROVE_SUBCRIBE:
            return subcribes.filter((plan) => plan._id !== action.payload);        
        default:
            return subcribes;       
    }
};