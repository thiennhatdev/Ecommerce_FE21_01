import React, { Fragment } from 'react';

class hotproduct extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="section-1">
                    <div className="product--highligh">
                        <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">sản phẩm nổi bật</span>
                        </div>
                        <div className="product--highligh-content">
                            <div className="child">
                                <div className="product position-relative">
                                    <figure className="position-relative"><img src={require('./../../assets/images/Green Shop/product-big.png')} alt="hoa" />
                                        <div className="on-img position-absolute d-flex justify-content-center align-items-center">
                                            <button className="text-uppercase">mua ngay</button>
                                            <div className="search-product d-flex justify-content-center align-items-center"><img src={require('./../../assets/images/Green Shop/search.png')} alt="search product" /></div>
                                        </div>
                                    </figure>
                                    <div className="content">
                                        <p>Cây Chân Chim</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                        <div className="price">
                                            <div className="price--new">250.000đ</div>
                                            <div className="price--old">260.000đ</div>
                                        </div>
                                    </div>
                                    <div className="sales">new</div>
                                </div>
                                <div className="wrap-child">
                                    <div className="product position-relative">
                                        <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="hoa" /></figure>
                                        <div className="content">
                                            <p>Cây Cọ Ta</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                            <div className="price">
                                                <div className="price--new">150.000đ</div>
                                                <div className="price--old">250.000đ</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product position-relative">
                                        <figure><img src={require('./../../assets/images/Green Shop/duanho.png')} alt="hoa" /></figure>
                                        <div className="content">
                                            <p>Cây Dứa Nhỏ</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                            <div className="price">
                                                <div className="price--new">375.000đ</div>
                                                <div className="price--old">250.000đ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="child">
                                <div className="product position-relative">
                                    <figure><img src={require('./../../assets/images/Green Shop/product-big.png')} alt="hoa" /></figure>
                                    <div className="content">
                                        <p>Cây Đa Búp Đỏ</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                        <div className="price">
                                            <div className="price--new">1.000.000đ</div>
                                            <div className="price--old">250.000đ</div>
                                        </div>
                                    </div>
                                    <div className="sales bg-percent">-50%</div>
                                </div>
                                <div className="wrap-child">
                                    <div className="product position-relative">
                                        <figure><img src={require('./../../assets/images/Green Shop/dalam.png')} alt="hoa" /></figure>
                                        <div className="content">
                                            <p>Cây Dạ Lam</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                            <div className="price">
                                                <div className="price--new">500.000đ</div>
                                                <div className="price--old">250.000đ</div>
                                            </div>
                                        </div>
                                        <div className="sales bg-percent">-50%</div>
                                    </div>
                                    <div className="product position-relative">
                                        <figure><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" /></figure>
                                        <div className="content">
                                            <p>Cây Danh Dự</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                            <div className="price">
                                                <div className="price--new">850.000đ</div>
                                                <div className="price--old">250.000đ</div>
                                            </div>
                                        </div>
                                        <div className="sales">new</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default hotproduct;