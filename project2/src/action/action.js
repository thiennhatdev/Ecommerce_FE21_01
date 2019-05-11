import  actionTypes  from './../constant/actiontype';
import callMockApi from './../util/index'; 
import axios from 'axios';
// add user signup
export const addUser = (info) => {
    return ( (dispatch) => {
        return (
            axios.post('http://5ccfeb115b71f40014dc10cd.mockapi.io/user', info).then(res => {
                 dispatch({
                    type : actionTypes.SIGNUP,
                    pushUser : res.data
                })
            })
        )
    })
}

// edit user
export const editUser = (info,id) => {
    return ( (dispatch) => {
        return (
            axios.put(`http://5ccfeb115b71f40014dc10cd.mockapi.io/user/${id}`, info).then(res => {
                 dispatch({
                    type : actionTypes.EDIT_USER,
                    editUser : info
                })
            })
        )
    })
}
// get all user from data
export const getUser = () => {
    return ( (dispatch) => {
        return (
            callMockApi('GET','user',null).then(res => {
                dispatch({
                    type : actionTypes.GET_USER,
                    allUser : res.data
                })
            })
        )
    })
}

