import React, { Fragment } from 'react';

class productmore extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="product--buy-content">
                    {this.showItem(this.props.productMore)}
                </div>
            </Fragment>
        );
    }
    showItem = product => {
        let item = '';
        item = product.map((value, index) => {
            return (
                <Fragment key={index}>
                    <div className="item-product d-flex"><img src={ value.img } alt="cây" />
                        <div className="item-info"><span>{value.name}</span><img src={require('./../../../assets/images/Green Shop/star.png')} alt="star" />
                            <p>{value.price_left}.000đ</p>
                        </div>
                    </div>
                </Fragment>
            );
        });
        return item;
    }
}

export default productmore;