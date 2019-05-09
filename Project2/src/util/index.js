import axios from 'axios';

export default function callMockAPI(method,endpoint,body){
    return axios({
        header : {
            'Content-Type' : 'application/json',
            'Accept'       : 'application/json'
        },
        method : method ,
        url    : `http://5ccfeb115b71f40014dc10cd.mockapi.io/${endpoint}`,
        body   : body
    })
}