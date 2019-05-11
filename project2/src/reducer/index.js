import {combineReducers} from 'redux';
import signupReducer from './signupReducer'
import signinReducer from './signinReducer'
import editProfileUser from './editUserReducer'
const myReducers = combineReducers({
    signupReducer,
    signinReducer,
    editProfileUser
});

export default myReducers;