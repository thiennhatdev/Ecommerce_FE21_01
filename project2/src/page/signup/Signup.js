import React, { Fragment } from 'react';
import Index from '../../component/signup/index';

export default function Signup(props){
    if( props.location.pathname === '/signup' ){
        require('./../../assets/styles/signup.css');
    }
    return(
        <Fragment>
            <Index />
        </Fragment>
    );
}