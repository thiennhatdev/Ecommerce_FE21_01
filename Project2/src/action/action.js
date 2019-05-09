import * as ActionType from './../constant/ActionType';
import callMockAPI from './../util/index';

export const actFetchProduct = ()=>dispatch=>{
    return callMockAPI('GET','product',null).then(res=>{
        dispatch({
            type : ActionType.fetchProduct ,
            Product  : res.data
        });
    }).catch(error=>{
        console.log(`Can't connect to the server` ,error );
    })
}

