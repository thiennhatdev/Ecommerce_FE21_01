import React, { Fragment } from 'react';
import Index from './../../component/detailproduct/index';
import './../../assets/styles/detail-product.css';
import './../../assets/styles/bootstrap.css';

export default function detail_product(props) {
    
    return (
        <Fragment>
            <Index match={ props.match } />
        </Fragment>
    );
}
