import { CREATE_DOWNLOAD, FETCH_DOWNLOAD} from '../../actions/actionTypes';

export default ( download = [], action ) => {
    switch( action.type) {
        case FETCH_DOWNLOAD:
            return action.payload;
        case CREATE_DOWNLOAD:
            return [...download, action.payload]; 
        default:
            return download;       
    }
};