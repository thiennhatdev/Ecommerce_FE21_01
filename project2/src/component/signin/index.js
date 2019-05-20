import React, { Fragment } from 'react';
import Singnin from './Signin';
import Header from './../include/Header';
import Footer from './../include/Footer';

export default function Signin(props){
    return(
        <Fragment>
            <Header />
            <Singnin />
            <Footer />
        </Fragment>
    );
}