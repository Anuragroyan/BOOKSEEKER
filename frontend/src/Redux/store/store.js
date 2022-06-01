import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import userReducer from '../reducers/users/userAuthReducer';
import updateUserProfile from '../reducers/users/userProfileReducer';
import userProfileReducer from '../reducers/users/userProfileReducer'
import blogreducer from '../reducers/blogs/blogreducer';
import bookreducer from '../reducers/books/bookreducer';
import paymentReducer from '../reducers/payment/paymentReducer';
import subscriptionReducer from '../reducers/subcriptions/subcriptionReducer';
import CartReducer from '../reducers/carts/CartReducer';
import downloadReducer from '../reducers/download/downloadReducer';
import creditReducer from '../reducers/credit/creditReducer';
const middleware = [thunk];

const reducer = combineReducers({
    userLogin: userReducer,
    userProfile: userProfileReducer,
    updatedUser: updateUserProfile,
    posts: blogreducer,
    books: bookreducer,
    payments : paymentReducer,
    subcribes : subscriptionReducer,
    shop : CartReducer,
    download: downloadReducer,
    credits: creditReducer,
});

const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData')) : null;

const initialState = {
    userLogin: {userInfo: userAuthFromStorage},
};
// console.log(userAuthFromStorage);
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;