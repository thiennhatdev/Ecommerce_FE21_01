import React, { Fragment } from 'react';

export default function footer(props) {
    return (
        <Fragment>
            <footer>
                <div className="footer--top d-sm-flex align-items-center justify-content-between">
                    <div className="footer--top-social"><span className="text-uppercase">kênh thông tin từ chúng tôi :</span>
                        <div className="social-icon d-none d-sm-block"><a href="#a"><img src={require('./../../assets/images/Green Shop/facebook.png')} alt="" /></a><a href="#a"><img src={require('./../../assets/images/Green Shop/twitter.png')} alt="" /></a><a href="#a"><img src={require('./../../assets/images/Green Shop/youtube.png')} alt="" /></a><a href="#a"><img src={require('./../../assets/images/Green Shop/v.png')} alt="" /></a>
                        </div>
                        <div className="social-icon d-block d-sm-none"><a href="#a"><img src={require('./../../assets/images/Green Shop/face-mobile.png')} alt="" /></a><a href="#a"><img src={require('./../../assets/images/Green Shop/twitter-mobile.png')} alt="" /></a><a href="#a"><img src={require('./../../assets/images/Green Shop/ytb-mobile.png')} alt="" /></a><a href="#a"><img src={require('./../../assets/images/Green Shop/v-mobile.png')} alt="" /></a>
                        </div>
                    </div>
                    <div className="footer--top-mail">
                        <h4 className="text-uppercase">đăng kí nhận thông tin <br className='d-none d-sm-block' /> từ chúng tôi</h4>
                    </div>
                    <div className="footer--top-search">
                        <div className="input-search position-relative">
                            <input type="text" />
                            <figure className="position-absolute"><img src={require('./../../assets/images/Green Shop/btn-footer.png')} alt="button" /></figure>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="footer--middle d-md-flex">
                    <div className="footer--middle-info mr-4">
                        <figure className="position-relative"><img src={require('./../../assets/images/Green Shop/GreenShop.png')} alt="greenshop" /><span className="position-absolute">Món quà từ thiên nhiên</span></figure>
                        <p>
                            Green shop được thành lập từ 8/2010 được sự tin tưởng của  các khách hàng trong suốt thời gian hoạt động đến nay cửa hàng ngày một phát triển</p>
                        <div className="phone"><img src={require('./../../assets/images/Green Shop/phone.png')} alt="phone" /><span>Điện thoại : (84-4) 66.558.868</span></div>
                        <div className="email"><img src={require('./../../assets/images/Green Shop/email.png')} alt="email" /><span>Email : info@dkt.com.vn</span></div>
                    </div>
                    <div className="footer--middle-details w-100 d-sm-flex justify-content-between">
                        <div className="part-detail">
                            <h4 className="text-uppercase font-weight-bold">thông tin khách hàng</h4>
                            <ul>
                                <li><a className="text-capitalize" href="#a">tài khoản của tôi</a></li>
                                <li><a className="text-capitalize" href="#a">sản phẩm ưa thích</a></li>
                                <li><a className="text-capitalize" href="#a">lịch sử mua hàng </a></li>
                                <li><a className="text-capitalize" href="#a">chính sách đổi trả</a></li>
                                <li><a className="text-capitalize" href="#a">góp ý, khiếu nại</a></li>
                            </ul>
                        </div>
                        <div className="part-detail">
                            <h4 className="text-uppercase font-weight-bold">hỗ trợ dịch vụ</h4>
                            <ul>
                                <li><a className="text-capitalize" href="#a">hệ thống cửa hàng</a></li>
                                <li><a className="text-capitalize" href="#a">hướng dẫn mua hàng</a></li>
                                <li><a className="text-capitalize" href="#a">hướng dẫn thanh toán </a></li>
                                <li><a className="text-capitalize" href="#a">tích điểm đổi quà</a></li>
                                <li><a className="text-capitalize" href="#a">câu hỏi thường gặp</a></li>
                            </ul>
                        </div>
                        <div className="part-detail">
                            <h4 className="text-uppercase font-weight-bold">chính sách ưu đãi</h4>
                            <ul>
                                <li><a className="text-capitalize" href="#a">chính sách giao hàng</a></li>
                                <li><a className="text-capitalize" href="#a">chính sách đổi trả sản phẩm</a></li>
                                <li><a className="text-capitalize" href="#a">chính sách bảo hàng </a></li>
                                <li><a className="text-capitalize" href="#a">giới thiệu sản phẩm mới</a></li>
                                <li><a className="text-capitalize" href="#a">chính sách trả góp</a></li>
                            </ul>
                        </div>
                        <div className="part-detail">
                            <h4 className="text-uppercase font-weight-bold">tin tức</h4>
                            <ul>
                                <li><a className="text-capitalize" href="#a">tin mới</a></li>
                                <li><a className="text-capitalize" href="#a">khuyến mại</a></li>
                                <li><a className="text-capitalize" href="#a">tuyển dụng</a></li>
                                <li><a className="text-capitalize" href="#a">download</a></li>
                                <li><a className="text-capitalize" href="#a">tags</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer--bottom">
                    <div className="footer--bottom-more d-none d-sm-flex justify-content-between">
                        <ul className="d-flex mb-0">
                            <li><a className="text-capitalize" href="#a">sitemap</a></li>
                            <li><a className="text-capitalize" href="#a">danh mục sản phẩm</a></li>
                            <li><a className="text-capitalize" href="#a">hợp tác</a></li>
                            <li><a className="text-capitalize" href="#a">thông tin liên hệ</a></li>
                            <li><a className="text-capitalize" href="#a">câu hỏi thường gặp</a></li>
                        </ul>
                        <div className="img-pay"><img src={require('./../../assets/images/Green Shop/visa.png')} alt="visa" /><img src={require('./../../assets/images/Green Shop/map.png')} alt="map" /><img src={require('./../../assets/images/Green Shop/paypal.png')} alt="paypal" /><img src={require('./../../assets/images/Green Shop/osc.png')} alt="osc" />
                        </div>
                    </div>
                    <div className="footer--bottom-design text-center text-white">Thiết kế bởi Bizweb＠</div>
                </div>
            </footer>
        </Fragment>
    );
}
