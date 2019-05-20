import React, { Fragment } from 'react';
import Index from './../../component/home/index';

export default function home(props) {
    if( props.location.pathname === '/' ){
        require('./../../assets/styles/all.css');
    }
    return (
        <Fragment>
            <Index />
        </Fragment>
    );
}

