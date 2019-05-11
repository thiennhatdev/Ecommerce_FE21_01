import React, { Fragment } from 'react';
import Detailproduct from './detailproduct';
import Header from './../include/Header';
import Footer from './../include/Footer';

class index extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Detailproduct match={this.props.match} />
                <Footer />
            </Fragment>
        );
    }
}

export default index;