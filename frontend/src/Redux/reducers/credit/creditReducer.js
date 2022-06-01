import { CREATE_REWARD, FETCH_REWARDS } from '../../actions/actionTypes';

export default ( credits = [], action ) => {
    switch( action.type) {
        case FETCH_REWARDS:
            return action.payload;
        case CREATE_REWARD:
            return [...credits, action.payload]; 
        default:
            return credits;       
    }
};