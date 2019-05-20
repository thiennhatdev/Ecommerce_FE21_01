import React, { Fragment } from 'react';

const footerdrink = (props) => {
    return (
        <Fragment>
            <footer className="clearfix">
                <div className="container">
                    <div className="row footer_top">
                        <div className="col-md-12"><img src={require('./../../assets/images/Drink/footer-header.png')} alt="ft" /></div>
                    </div>
                    <div className="row footer_middle">
                        <div className="col-md-4 col-sm-6 col-lg-2">
                            <h3>THÔNG TIN</h3>
                            <ul>
                                <li><a href="#a">VỀ CHÚNG TÔI</a></li>
                                <li><a href="#a">GIAO HÀNG</a></li>
                                <li><a href="#a">CẢM NGHĨ</a></li>
                                <li><a href="#a">LƯU TRỮ</a></li>
                                <li><a href="#a">CHÍNH SÁCH RIÊNG TƯ</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 col-lg-2 footer_middle_buy">
                            <h3>MUA HÀNG</h3>
                            <ul>
                                <li><a href="#a">VẬN CHUYỂN VÀ TRA HÀNG</a></li>
                                <li><a href="#a">MUA HÀNG AN TOÀN</a></li>
                                <li><a href="#a">VẬN QUỐC TẾ</a></li>
                                <li><a href="#a">LIÊN KẾT</a></li>
                                <li><a href="#a">DỊCH VỤ GIẢM GIÁ</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 col-lg-4">
                            <h3>GỬI EMAIL</h3>
                            <p>Gửi email cho chúng tôi để được hỗ trợ</p>
                            <div className="row form_footer">
                                <form className="form_field"><input type="text" /><label>Enter your email</label><button type="submit">GỬi</button></form>
                            </div>
                            <div className="row footer_middle_icon"><a href="#a"><i className="fab fa-twitter"></i></a><a href="#a"><i
                                className="fab fa-google-plus-g"></i></a><a href="#a"><i className="fas fa-basketball-ball"></i></a><a
                                    href="#a"><i className="fab fa-linkedin-in"></i></a><a href="#a"><i className="fas fa-wifi"></i></a></div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-lg-4 footer_middle_contact">
                            <h3>LIÊN HỆ</h3>
                            <div className="row footer_middle_contact_info">
                                <div className="row footer_middle_contact_i"><i className="fas fa-map-marker-alt">Tầng 4,Tòa nhà Hanoi
                                Group Số 442 Đội Cấn,P.Cống Vị,Q. Ba Đình,Hà Nội</i></div>
                                <div className="row col-md-6 col-sm-6"><i className="fas fa-blender-phone">(04) 6674 2332</i></div>
                                <div className="row col-md-6 col-sm-6"><i className="fas fa-blender-phone">(04) 3786 8904</i></div>
                                <div className="row col-md-6 col-sm-6"><i className="fas fa-blender-phone">(08) 6680 9686</i></div>
                                <div className="row col-md-6 col-sm-6"><i className="fas fa-envelope">Support@bizweb.vn</i></div>
                            </div>
                        </div>
                    </div>
                    <div className="row footer_bottom">
                        <div className="footer_bottom_left">
                            <p> © CoppyRight 2018-2014 DKT Technology JSC</p>
                        </div>
                        <div className="footer_bottom_right"><img src={require('./../../assets/images/Drink/social-pay.png')} alt="pay" /></div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
export default footerdrink;