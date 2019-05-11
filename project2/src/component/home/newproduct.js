import React, { Fragment } from 'react';

class newproduct extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="section-3">
                    <div className="wrap-dalat"><img src={require('./../../assets/images/Green Shop/dalat.png')} alt="sương rồng đà lạt" /></div>
                </div>
                <div className="section-4">
                    <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">sản phẩm mới</span>
                        <div className="arrow d-flex">
                            <div className="arrow-left"></div>
                            <div className="arrow-right"></div>
                        </div>
                    </div>
                    <div className="product-news">
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây Cọ Ta</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">153.000đ</div>
                                    <div className="price--old">250.000đ</div>
                                </div>
                            </div>
                            <div className="sales">new</div>
                        </div>
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/dalam.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây Dạ Lam</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">123.000đ</div>
                                    <div className="price--old">250.000đ</div>
                                </div>
                            </div>
                        </div>
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/duanho.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây Dứa Nhỏ</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">157.000đ</div>
                                    <div className="price--old">250.000đ</div>
                                </div>
                            </div>
                        </div>
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây Danh Dự</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">110.000đ</div>
                                    <div className="price--old">250.000đ</div>
                                </div>
                            </div>
                        </div>
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/dalam.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây Dạ Lam</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">170.000đ</div>
                                    <div className="price--old">250.000đ</div>
                                </div>
                            </div>
                        </div>
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây Cọ Ta</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">193.000đ</div>
                                    <div className="price--old">250.000đ</div>
                                </div>
                            </div>
                        </div>
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/duanho.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây Dứa Nhỏ</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">340.000đ</div>
                                    <div className="price--old">250.000đ</div>
                                </div>
                            </div>
                        </div>
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây Danh Dự</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">103.000đ</div>
                                    <div className="price--old">250.000đ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default newproduct;