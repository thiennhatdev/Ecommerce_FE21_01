import React, { Fragment } from 'react';
import { price } from './../../constant/menu';

class filterprice extends React.Component {

    render() {
        return (
            <Fragment>
                <ul>
                    {this.displayPrice(price)}
                </ul>
            </Fragment>
        );
    }
    filterPrice = e => {
        console.log(  e.target.getElementsByTagName('span')[0].innerText );
        let a = e.target.querySelectorAll('span')[0].innerText;
        console.log( e.target.querySelectorAll('span')[0].innerText );
        let b = e.target.getElementsByTagName('span')[1].innerText ;
        this.props.filterPrice( a, b);
        
    }
    displayPrice = props => {
        let price = '';
        price = props.map((value, index) => {
            return (
                <li onClick={(event) => this.filterPrice(event)} key={index}><span>{value.price_left}</span>.000Đ - <span>{value.price_right}</span>.000Đ</li>
            );
        });
        return price;
    }
}
export default filterprice;


