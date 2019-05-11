import actionTypes  from '../constant/actiontype';

const stateSignin = {
    allUser : null
}

const signinReducer = (state = stateSignin, action) => {
    switch(action.type) {
        case actionTypes.GET_USER:
            state = {
                ...state,
                allUser : action.allUser
            }
            // console.log(state)        
            break;
        default:
            break    
    }
    return state; 
    
}
export default signinReducer