import React,{Fragment} from 'react';
import Listproduct from './list-product';
import Header from './../include/Header';
import Footer from './../include/Footer';
import {connect} from 'react-redux';
import {actFetchProduct} from './../../action/action';

class index extends React.Component{

    componentDidMount(){
        this.props.FetchProduct();
    }
    render(){
        return(
            <Fragment>
                <Header />
                <Listproduct product={this.props.product} />
                <Footer />
            </Fragment>
        );
    }
}

const mapStateToProps = state =>{
    return{
        product : state.product
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
