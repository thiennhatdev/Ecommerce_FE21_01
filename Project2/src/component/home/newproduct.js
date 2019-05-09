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
                        {this.displayItem(this.props.newproduct)}
                    </div>
                </div>
            </Fragment>
        );
    }
    displayItem = product => {
        let item = '';
        item = product.map((value, index) => {
            return (
                <div key={index} className="product position-relative">
                    <figure><img src={ value.img } alt="hoa" /></figure>
                    <div className="content">
                        <p>{value.name}</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                        <div className="price">
                            <div className="price--new">{value.price_left}}.000đ</div>
                            <div className="price--old">{value.price_right}.000đ</div>
                        </div>
                    </div>
                </div>
            );
        });
        return item;
    }

}

export default newproduct;