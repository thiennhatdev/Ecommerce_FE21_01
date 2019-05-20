import {combineReducers} from 'redux';
import signupReducer from './signupReducer';
import signinReducer from './signinReducer';
import editProfileUser from './editUserReducer';
import allProductOfUser from './allProductOfUser';
import product from './product';
import userPaypal from './userPaypal'
import user from './user';
import request from './request';
import chart from './chart';
const myReducers = combineReducers({
    signupReducer,
    signinReducer,
    editProfileUser,
    allProductOfUser,
    product,
    userPaypal,
    user,
    request,
    chart
});

export default myReducers;