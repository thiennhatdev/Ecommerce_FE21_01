import React, { Fragment } from 'react';
import Slide from './slide';
import Hotproduct from './hotproduct';
import Buymore from './buymore';
import Newproduct from './newproduct';
import News from './news';
import Header from './../include/Header';
import Footer from './../include/Footer';
import { actFetchProduct } from './../../action/action';
import {connect} from 'react-redux';

class index extends React.Component {

    componentDidMount(){
        this.props.FetchProduct();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <Slide />
                    <section>
                        <Hotproduct hotProduct={this.props.hotProduct} />
                        <Buymore productMore={this.props.productMore} promotion={this.props.promotion} />
                        <Newproduct newproduct={this.props.newproduct} />
                        <News />
                    </section>
                </main>
                <Footer />
            </Fragment>
        );
    }
}

const mapStateToProps = state=>{
    return{
        productMore : state.product.productMore,
        hotProduct  : state.product.hotProduct ,
        promotion   : state.product.promotion  ,
        newproduct  : state.product.newproduct
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        FetchProduct :()=>{
            dispatch(actFetchProduct());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(index);