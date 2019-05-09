import * as ActionType from '../constant/ActionType';

const initialState = {
    hotProduct:[],
    productMore:[],
    promotion: [],
    newproduct: []
};

const product = ( state =  initialState , action)=>{

    switch( action.type ){
        case ActionType.fetchProduct :
            return {...state, hotProduct : action.Product[0].hotproduct , productMore : action.Product[0].productmore ,
                promotion : action.Product[0].promotion , newproduct : action.Product[0].newproduct    
            }
        default :
            return state;
    }
}

export default product;