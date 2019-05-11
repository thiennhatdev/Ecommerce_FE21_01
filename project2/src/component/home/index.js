import React, { Fragment } from 'react';
import Slide from './slide';
import Hotproduct from './hotproduct';
import Buymore from './buymore';
import Newproduct from './newproduct';
import News from './news';
import Header from './../include/Header';
import Footer from './../include/Footer';

const index = (props) => {
    return (
        <Fragment>
            <Header />
            <main>
                <Slide />
                <section>
                    <Hotproduct />
                    <Buymore />
                    <Newproduct />
                    <News />
                </section>
            </main>
            <Footer />
        </Fragment>
    );
}

export default index;