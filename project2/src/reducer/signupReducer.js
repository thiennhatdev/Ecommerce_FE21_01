import actionTypes from './../constant/actiontype';


// direct page when signup success 
function directPage() {
    alert('Chúc mừng bạn đã đăng ký thành công');
    setTimeout(() => {
        window.location.href = 'login';
    },500)
}
const signupInitialState = {
    infoSignup : null
}
const signup = (state = signupInitialState, action) =>  {
    switch(action.type) {
        case actionTypes.SIGNUP :
            directPage()
            break;    
        case actionTypes.ERR_SIGNUP :
            alert(`Kết nối không thành công. Vui lòng đăng ký lại!`)
            break;    
        default : 
            break;
    } 
    return state
}

export default signup;
