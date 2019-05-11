import React, { Fragment } from 'react';

class buymore extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="section-2">
                    <div className="product--buy-sale">
                        <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">sản phẩm mua nhiều</span>
                        </div>
                        <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">sản phẩm khuyến mại</span>
                            <div className="arrow d-flex">
                                <div className="arrow-left"></div>
                                <div className="arrow-right"></div>
                            </div>
                        </div>
                        <div className="product--buy-content">
                            <div className="item-product d-flex"><img src={require('./../../assets/images/Green Shop/dalam.png')} alt="cây" />
                                <div className="item-info"><span>Cây Dạ Lam</span><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <p>250.000đ</p>
                                </div>
                            </div>
                            <div className="item-product d-flex"><img src={require('./../../assets/images/Green Shop/cota.png')} alt="cây" />
                                <div className="item-info"><span>Cây Cọ Ta</span><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <p>260.000đ</p>
                                </div>
                            </div>
                            <div className="item-product d-flex"><img src={require('./../../assets/images/Green Shop/duanho.png')} alt="cây" />
                                <div className="item-info"><span>Cây Dứa Nhỏ</span><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <p>270.000đ</p>
                                </div>
                            </div>
                            <div className="item-product d-flex"><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="cây" />
                                <div className="item-info"><span>cây chân chim</span><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <p>280.000đ</p>
                                </div>
                            </div>
                            <div className="item-product d-flex"><img src={require('./../../assets/images/Green Shop/cota.png')} alt="cây" />
                                <div className="item-info"><span>Cây Đa Búp Đỏ</span><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <p>290.000đ</p>
                                </div>
                            </div>
                            <div className="item-product d-flex"><img src={require('./../../assets/images/Green Shop/dalam.png')} alt="cây" />
                                <div className="item-info"><span>Cây Danh Dự</span><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <p>210.000đ</p>
                                </div>
                            </div>
                        </div>
                        <div className="product--sale-content">
                            <div className="product position-relative">
                                <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="hoa" /></figure>
                                <div className="content">
                                    <p>Cây Cọ Ta</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <div className="price">
                                        <div className="price--new">153.000đ</div>
                                        <div className="price--old">250.000đ</div>
                                    </div>
                                </div>
                                <div className="sales bg-percent">-25%</div>
                            </div>
                            <div className="product position-relative">
                                <figure><img src={require('./../../assets/images/Green Shop/duanho.png')} alt="hoa" /></figure>
                                <div className="content">
                                    <p>Cây Dứa Nhỏ</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <div className="price">
                                        <div className="price--new">120.000đ</div>
                                        <div className="price--old">250.000đ</div>
                                    </div>
                                </div>
                                <div className="sales bg-percent">-10%</div>
                            </div>
                            <div className="product position-relative">
                                <figure><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" /></figure>
                                <div className="content">
                                    <p>Cây Danh Dự</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <div className="price">
                                        <div className="price--new">190.000đ</div>
                                        <div className="price--old">250.000đ</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product position-relative">
                                <figure><img src={require('./../../assets/images/Green Shop/dalam.png')} alt="hoa" /></figure>
                                <div className="content">
                                    <p>Cây Dạ Lam</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <div className="price">
                                        <div className="price--new">120.000đ</div>
                                        <div className="price--old">250.000đ</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product position-relative">
                                <figure><img src={require('./../../assets/images/Green Shop/duanho.png')} alt="hoa" /></figure>
                                <div className="content">
                                    <p>Cây Danh Dự</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <div className="price">
                                        <div className="price--new">178.000đ</div>
                                        <div className="price--old">250.000đ</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product position-relative">
                                <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="hoa" /></figure>
                                <div className="content">
                                    <p>Cây Cọ Ta</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                    <div className="price">
                                        <div className="price--new">151.000đ</div>
                                        <div className="price--old">250.000đ</div>
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
export default buymore;