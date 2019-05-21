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
            }).catch((err) => {
                dispatch({
                    type : actionTypes.ERR_SIGNUP,
                    err
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
                    editUser : info,
                })
            }).catch((err) => {
                dispatch({
                    type : actionTypes.ERR_EDITUSER,
                    err
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
// all product of user
export const allProductOfUser = (info,id) => {
    return ( (dispatch) => {
        return (
            axios.put(`http://5ccfeb115b71f40014dc10cd.mockapi.io/user/${id}`, info).then(res => {
                 dispatch({
                    type : actionTypes.ALL_PRODUCT_OF_USER,
                    allProductOfUser : info
                })
            })
        )
    })
}


//------------------------------------------
// admin
export const actFetchProduct = () => dispatch => {
    return callMockApi('GET', 'product', null).then(res => {
        dispatch({
            type: actionTypes.FETCH_PRODUCT,
            Product: res.data
        });
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_FETCH_PRODUCT,
            error
        })
    })
}
export const actRepairCategory = category => dispatch => {
    return callMockApi('PUT', 'product/1', {
        category: category
    }).then(res => {
        dispatch({
            type: actionTypes.ACT_REPAIR_CATOGERY,
            category
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_ACT_REPAIR_CATOGERY,
            error
        })
    })
}

export const actRemoveCategory = category => dispatch => {
    return callMockApi('PUT', 'product/1', {
        category: category
    }).then(res => {
        dispatch({
            type: actionTypes.ACT_REMOVE_CATEGORY,
            category
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_ACT_REMOVE_CATOGERY,
            error
        })
    })
}

export const actFetchUser = () => dispatch => {
    return callMockApi('GET', 'user', null).then(res => {
        dispatch({
            type: actionTypes.FETCH_USER,
            user: res.data
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_FETCH_USER,
            error
        })
    })
}

export const actRemoveUser = (user) => dispatch => {
    return callMockApi('DELETE', `user/${user.id}`, null).then(res => {
        dispatch({
            type: actionTypes.ACT_REMOVE_USER,
            user: res.data
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_ACT_REMOVE_USER,
            error
        })
    })
}

export const actRepairUser = user => dispatch => {
    return callMockApi('PUT', `user/${user.id}`, user).then(res => {
        dispatch({
            type: actionTypes.ACT_REPAIR_USER,
            user: res.data
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_ACT_REPAIR_USER,
            error
        })
    })
}

export const actRemoveProductAdmin = product => dispatch => {
    return callMockApi('PUT', `product/1`, {
        newproduct: product
    }).then(res => {
        dispatch({
            type: actionTypes.ACT_REMOVE_PRODUCT_ADMIN,
            product
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_ACT_REMOVE_PRODUCT_ADMIN,
            error
        })
    })
}

export const actRepairProductAdmin = product => dispatch => {
    return callMockApi('PUT', `product/1`, {
        newproduct: product
    }).then(res => {
        dispatch({
            type: actionTypes.ACT_REPAIR_PRODUCT_ADMIN,
            product
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_ACT_REPAIR_PRODUCT_ADMIN,
            error
        })
    })
}
export const actSendRequest = (request) => {
    return ( (dispatch) => {
        return (
            axios.post('http://5ccfeb115b71f40014dc10cd.mockapi.io/request', request).then(res => {
                 dispatch({
                    type : actionTypes.ACT_SEND_REQUEST,
                    request
                })
            }).catch((err) => {
                dispatch({
                    type : actionTypes.ERR_ACT_SEND_REQUEST,
                    err
                })
            })
        )
    })
}

export const actFetchRequest = () => dispatch => {
    return callMockApi('GET', 'request', null).then(res => {
        dispatch({
            type: actionTypes.FETCH_REQUEST,
            request: res.data
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_FETCH_REQUEST,
            error
        }) 
    })
}

export const actRemoveRequest = request => dispatch => {
    return callMockApi('DELETE', `request/${request.id}`, null).then(res => {
        dispatch({
            type: actionTypes.ACT_REMOVE_REQUEST,
            request
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_ACT_REMOVE_REQUEST,
            error
        })
    })
}

export const actRemoveOrder = order => dispatch => {
    return callMockApi('PUT', `user/${order.id}`, order).then(res => {
        dispatch({
            type: actionTypes.ACT_REMOVE_ORDER,
            order
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_ACT_REMOVE_ORDER,
            error
        })
    })
}

export const fecthChart = () => dispatch => {
    return callMockApi('GET','chart', null).then(res => {
        dispatch({
            type: actionTypes.FETCH_CHART ,
            chart : res.data
        })
    }).catch(error => {
        dispatch({
            type : actionTypes.ERR_FETCH_CHART,
            error
        })
    })
}

