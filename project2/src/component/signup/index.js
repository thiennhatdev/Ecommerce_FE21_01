import React, { Fragment } from 'react';
import Signup from './Signup';
import Header from './../include/Header';
import Footer from './../include/Footer';

export default function(props){
    return(
        <Fragment>
            <Header />
            <Signup />
            <Footer />
        </Fragment>
    )
}