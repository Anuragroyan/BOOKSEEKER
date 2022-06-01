import { FETCH_BOOK, CREATE_BOOK, UPDATE_BOOK, DELETE_BOOK, LIKE_BOOK} from '../../actions/actionTypes';

export default (books = [], action) => {
    switch (action.type) {
        case FETCH_BOOK:
            return action.payload;
        case LIKE_BOOK:
            return books.map((post) => (post._id === action.payload._id ? action.payload : post));
        case CREATE_BOOK:
            return [...books, action.payload];
        case UPDATE_BOOK:
            return books.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE_BOOK:
            return books.filter((post) => post._id !== action.payload);
        default: 
            return books;                   
    }
};