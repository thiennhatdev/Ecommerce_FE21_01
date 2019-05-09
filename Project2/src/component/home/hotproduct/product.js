import React, { Fragment } from 'react';

export default function product(props) {


    const { bigproduct, smallproduct } = props.product;

    return (
        <Fragment>
            <div className="child">
                <div className="product position-relative">
                    <figure className="position-relative"><img src={bigproduct.img} alt="hoa" />
                        <div className="on-img position-absolute d-flex justify-content-center align-items-center">
                            <button className="text-uppercase">mua ngay</button>
                            <div className="search-product d-flex justify-content-center align-items-center"><img src={require('./../../../assets/images/Green Shop/search.png')} alt="search product" /></div>
                        </div>
                    </figure>
                    <div className="content">
                        <p>{bigproduct.name}</p><img src={require('./../../../assets/images/Green Shop/star.png')} alt="star" />
                        <div className="price">
                            <div className="price--new">{bigproduct.price_left}.000đ</div>
                            <div className="price--old">{bigproduct.price_right}.000đ</div>
                        </div>
                    </div>
                    <div className="sales">new</div>
                </div>
                <div className="wrap-child">
                    <div className="product position-relative">
                        <figure><img src={smallproduct[0].img} alt="hoa" /></figure>
                        <div className="content">
                            <p>{smallproduct[0].name}</p><img src={require('./../../../assets/images/Green Shop/star.png')} alt="star" />
                            <div className="price">
                                <div className="price--new">{smallproduct[0].price_left}.000đ</div>
                                <div className="price--old">{smallproduct[0].price_right}.000đ</div>
                            </div>
                        </div>
                    </div>
                    <div className="product position-relative">
                        <figure><img src={smallproduct[1].img} alt="hoa" /></figure>
                        <div className="content">
                            <p>{smallproduct[1].name}</p><img src={require('./../../../assets/images/Green Shop/star.png')} alt="star" />
                            <div className="price">
                                <div className="price--new">{smallproduct[1].price_left}.000đ</div>
                                <div className="price--old">{smallproduct[1].price_right}}.000đ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}