import actionTypes  from '../constant/actiontype';

const stateSignin = {
    editUser : JSON.parse(localStorage.getItem('profileUser'))
}

const editProfileUser = (state = stateSignin, action) => {
    switch(action.type) {
        case actionTypes.EDIT_USER:
            state = {
                ...state,
                editUser : action.editUser
            }
                 
            
            break;
        default:
            break    
    }
    return state; 
    
}
export default editProfileUser