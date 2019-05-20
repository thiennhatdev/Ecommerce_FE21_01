import React, { Fragment } from 'react';

export default function index() {

    function dropdown() {

        let a = document.getElementsByClassName("dropdown-container")[0];
        if (a.style.display === 'block') {
            a.style.display = 'none';
        } else {
            a.style.display = 'block';
        }

    };

    return (
        <Fragment>

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="sidenav">
                    <div className="logo">
                        <img src={require('./../../assets/images/Admin/title.png')} alt="title" />
                    </div>
                    <div className="row balance user">

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 slide_img">
                            <img src={require('./../../assets/images/Admin/avatar.jpg')} alt="avatar" />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                            <h5 className="pd-top">Hà Tuấn Kiệt</h5>
                            <h5>Admin <i className="fas fa-user-shield"></i></h5>
                            <div className="logout">
                                <h4><i className="fas fa-sign-out-alt"></i>Signout</h4>

                            </div>
                        </div>
                    </div>
                    <a href="/">Home <i className="fas fa-home fontawesome"></i></a>
                    <a href="/user">Manager User<i className="fas fa-users-cog fontawesome"></i></a>
                    <a href="/order" >Manager List Order <i className="fas fa-calendar-check fontawesome"></i> </a>
                    <a href="/productmanager">Manager Product<i className="fas fa-cart-plus fontawesome"></i></a>
                    <button className="dropdown-btn" onClick={dropdown} >
                        Manager Category
                                        <i className="fas fa-th-list fontawesome"></i>
                    </button>
                    <div className="dropdown-container text-center">
                        <a href="#a"><i className="fas fa-arrow-circle-right"></i>Cây chậu treo</a>
                        <a href="#a"><i className="fas fa-arrow-circle-right"></i>Cây có hoa</a>
                        <a href="#a"><i className="fas fa-arrow-circle-right"></i>Cây dây leo</a>
                        <a href="#a"><i className="fas fa-arrow-circle-right"></i>Cây để bàn</a>
                    </div>
                    <a href="/request" className="abot">Manager List Request <i className="fas fa-paper-plane fontawesome"></i></a>

                </div>
            </div>

        </Fragment>
    )
}