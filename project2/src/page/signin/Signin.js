import React, { Fragment } from 'react';
import Index from '../../component/signin/index';

export default function Signin(props){
    if( props.location.pathname === '/login' ){
        require('./../../assets/styles/signin.css');
    }
    return(
        <Fragment>
            <Index />
        </Fragment>
    );
}