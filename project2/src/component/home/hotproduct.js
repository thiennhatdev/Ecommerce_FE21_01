import React, { Fragment } from 'react';
import Product from './hotproduct/product';

class hotproduct extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="section-1">
                    <div className="product--highligh">
                        <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">sản phẩm nổi bật</span>
                        </div>
                        <div className="product--highligh-content">

                            { this.hotProduct( this.props.hotProduct ) }

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    hotProduct = hotProduct =>{
        let product = '';
        product = hotProduct.map((value,index)=>{
            return (
                <Product key={index} product={value} /> 
            );
        });
        return product;
    }
}

export default hotproduct;