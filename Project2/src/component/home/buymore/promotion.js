import React, { Fragment } from 'react';

class promotion extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="product--sale-content">
                    {this.listPromotion(this.props.promotion)}
                </div>
            </Fragment>
        );
    }
    listPromotion = (param) => {
        let item = '';
        item = param.map((value, index) => {
            return (
                <div key={index} className="product position-relative">
                    <figure><img src={ value.img } alt="hoa" /></figure>
                    <div className="content">
                        <p>{value.name}</p><img src={require('./../../../assets/images/Green Shop/star.png')} alt="star" />
                        <div className="price">
                            <div className="price--new">{value.price_left}.000đ</div>
                            <div className="price--old">{value.price_right}.000đ</div>
                        </div>
                    </div>
                </div>
            );
        });
        return item;
    }
}

export default promotion;
