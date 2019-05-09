import React, { Fragment } from 'react';
import Productmore from './buymore/productmore';
import Promotion from './buymore/promotion';

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
                        <Productmore productMore={this.props.productMore} />
                        <Promotion promotion={this.props.promotion}  />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default buymore;