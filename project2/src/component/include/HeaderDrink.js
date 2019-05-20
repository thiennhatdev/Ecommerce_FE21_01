import React, { Fragment } from 'react';

const headerdrink = (props) => {
    return (
        <Fragment>
            <header className="clearfix">
                <div className="row header_nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-12 col-xs-8 header_nav_left">
                                <ul>
                                    <li><a href="#a">Tài khoản của tôi</a></li>
                                    <li><a href="#a">Trạng thái đơn hàng</a></li>
                                    <li><a href="#a">Danh sách ưa thích</a></li>
                                    <li><a href="#a">Giỏ hàng</a></li>
                                    <li><a href="#a">Đăng nhập</a></li>
                                    <li><a href="#a">Đăng ký</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-4 header_nav_right">
                                <form><input type="text" /><label>Tìm kiếm ở đây ... </label><button className="button_search" type="submit"><i
                                    className="fas fa-search"></i></button></form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <menu className="clearfix">
                <div className="container">
                    <div className="row menu">
                        <div className="menu-left"><img src={require('./../../assets/images/Drink/logo.png')} alt="logo" /></div>
                        <div className="col-xs-12 menu-right">
                            <ul className="menu-right-dropdown">
                                <li><a href="#a">TRANG CHỦ</a></li>
                                <li className="dropdown"><a href="#a">RƯỢU VANG ĐỎ</a>
                                    <div className="dropdown-li">
                                        <div className="menu-dropdown"><i className="fas fa-caret-up"></i>
                                            <div className="menu-item">
                                                <h3>RƯỢU NGOẠI</h3>
                                                <ul className="sub_item">
                                                    <li><a href="#a">Rượu Chivas</a></li>
                                                    <li><a href="#a">Hàng độc - Rượu độc đáo</a></li>
                                                    <li><a href="#a">Johnnie Walker</a></li>
                                                    <li><a href="#a">Rượu Whisky</a></li>
                                                    <li><a href="#a">Rượu Remy Martin</a></li>
                                                    <li><a href="#a">Rượu Glenmorangie</a></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item">
                                                <h3>RƯỢU NGOẠI</h3>
                                                <ul className="sub_item">
                                                    <li><a href="#a">Rượu Chivas</a></li>
                                                    <li><a href="#a">Hàng độc - Rượu độc đáo</a></li>
                                                    <li><a href="#a">Johnnie Walker</a></li>
                                                    <li><a href="#a">Rượu Whisky</a></li>
                                                    <li><a href="#a">Rượu Remy Martin</a></li>
                                                    <li><a href="#a">Rượu Glenmorangie</a></li>
                                                </ul>
                                            </div>
                                            <div className="menu-item">
                                                <h3>RƯỢU NGOẠI</h3>
                                                <ul className="sub_item">
                                                    <li><a href="#a">Rượu Chivas</a></li>
                                                    <li><a href="#a">Hàng độc - Rượu độc đáo</a></li>
                                                    <li><a href="#a">Johnnie Walker</a></li>
                                                    <li><a href="#a">Rượu Whisky</a></li>
                                                    <li><a href="#a">Rượu Remy Martin</a></li>
                                                    <li><a href="#a">Rượu Glenmorangie</a></li>
                                                </ul>
                                            </div>
                                            <div className="image_menu"><img src={require('./../../assets/images/Drink/menu-info.jpg')} alt="" /></div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#a">RƯỢU VANG TRẮNG</a></li>
                                <li><a href="#a">CHAMPAGNE</a></li>
                                <li><a href="#a">THÔNG TIN</a></li>
                                <li><a href="#a">BLOG</a></li>
                                <li><a href="#a">LIÊN HỆ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </menu>
        </Fragment>
    );
}
export default headerdrink;