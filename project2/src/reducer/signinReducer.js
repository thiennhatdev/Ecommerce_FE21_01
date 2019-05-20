import actionTypes  from '../constant/actiontype';

const stateSignin = {
    allUser : null,
    errUpdate : null
}

const signinReducer = (state = stateSignin, action) => {
    switch(action.type) {
        case actionTypes.GET_USER:
            state = {
                ...state,
                allUser : action.allUser
            }
            break;
        case actionTypes.ERR_EDITUSER:
            state = {
                ...state,
                errUpdate : action.err
            }
            return state
        default:
            break    
    }
    return state; 
    
}
export default signinReducer