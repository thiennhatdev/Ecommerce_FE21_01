import React, { Fragment } from 'react';

const slider = (props) => {
    return (
        <Fragment>
            <article>
                <div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li className="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="slide-banner"><img className="d-none d-sm-inline-block" src={require('./../../assets/images/Green Shop/gs-shop.png')} alt="gs shop" />
                                <p className="font-italic text-white d-none d-sm-block">(Miễn phí vận chuyển với những đơn hàng có trị giá trên 5.000.000 đ)</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="slide-banner"><img className="d-none d-sm-inline-block" src={require('./../../assets/images/Green Shop/gs-shop.png')} alt="gs shop" />
                                <p className="font-italic text-white d-none d-sm-block">(Miễn phí vận chuyển với những đơn hàng có trị giá trên 5.000.000 đ)</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="slide-banner"><img className="d-none d-sm-inline-block" src={require('./../../assets/images/Green Shop/gs-shop.png')} alt="gs shop" />
                                <p className="font-italic text-white d-none d-sm-block">(Miễn phí vận chuyển với những đơn hàng có trị giá trên 5.000.000 đ)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Fragment>
    );
}
export default slider;