import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function signin(props) {
    return (
        <Fragment>
            <div className="redirect_404"><Link to="/">Trang Chu<i className="fas fa-caret-right"></i></Link><Link to="/contact">Lien He<i className="fas fa-caret-right"></i></Link></div>
            <div className="box_search"><i className="fas fa-search"></i><input type="text" /></div>
        </Fragment>
    );
}