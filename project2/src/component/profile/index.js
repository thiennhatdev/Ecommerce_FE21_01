import React, { Fragment } from 'react';
import Profile from './Profile';
import Header from './../include/Header';
import Footer from './../include/Footer';

export default function Index(props){
    return(
        <Fragment>
            <Header /> 
            <Profile /> 
            <Footer /> 
        </Fragment>
    );
}