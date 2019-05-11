import React, { Fragment } from 'react';
import { connect } from 'react-redux';

class item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: ''

        }
    }
    componentWillMount() {
        if (this.props.product !== null) {
            this.setState({
                filterName: this.props.product
            });
        }
    }
    componentWillReceiveProps(nextProps){
        if( nextProps.newproduct ){
            this.setState({
                filterName:{
                    product : nextProps.newproduct
                }
            });
        }
    }   

    render() {
        return (
            <Fragment>
                {this.productItem(this.state.filterName)}
            </Fragment>
        );
    }
    productItem = (product) => {
        let item = '';
        if (product) {
            item = product.product.map((value, index) => {
                return (
                    <div key={index} className="product position-relative">
                        <figure><img src={value.img} alt="hoa" /></figure>
                        <div className="content">
                            <p>{value.name}</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                            <div className="price">
                                <div className="price--new">{value.price_left}.000đ</div>
                                <div className="price--old">{value.price_right}.000đ</div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
        return item;
    }
}

export default connect(state=>({newproduct : state.product.newproduct}), null)(item);