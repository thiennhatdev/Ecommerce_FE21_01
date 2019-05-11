import React ,{Fragment} from 'react';
import Index from './../../component/listproduct/index';

export default function list_product(props){
    if( props.location.pathname === '/list-product' ){
        require('./../../assets/styles/list-product.css');
    }
    return(
        <Fragment>
              <Index /> 
        </Fragment>
    );
}
