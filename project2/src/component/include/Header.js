import React, { Fragment } from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import {menu} from './../../constant/menu';



const MenuCustomLink = ({ path, exact, label, sub }) => {
    return (
        <Route path={path} exact={exact} children={({ match }) => {
            var activeClass = match ? 'active' : '';
            return (
                <li className={activeClass}>
                    <NavLink to={path}>
                        {label}
                        {sub === null ?'':<ul className='d-none' >
                            <li>{sub.label}</li>
                            { sub.label2 === null?'':<li>{sub.label2}</li> }
                        </ul>}

                    </NavLink>
                </li>
            );
        }} />
    );
}


class header extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            statusLogin : false,
            numberProduct : 0
        }
    }
    

    componentWillMount() {
        const checkLogin = localStorage.getItem('profileUser');
        if(!checkLogin) {
            this.setState({
                statusLogin : !this.state.statusLogin
            })
            
        }
        // show number product in cart
        let productOfUser = JSON.parse(localStorage.getItem('productOfUser'))
        if(productOfUser) {
            let totalProduct =0;
            productOfUser.map((val) => {
                totalProduct += +val.quantity
                return true
            })
            this.setState({
                numberProduct : totalProduct
            })
        }
    }
    
    showLoginUser = () => {
        const { statusLogin } = this.state;
        const nameUser = JSON.parse(localStorage.getItem('profileUser'));
        if(statusLogin || nameUser === null) {
            
            return(
                <Link className="d-inline-block" to="/login"><img src={require('./../../assets/images/Green Shop/signin.png')} alt="signin" /><span>Đăng nhập</span></Link>
            )
        } else {
            return(<Link className="d-inline-block" to="/profile"><span className='text-success'>Chào { nameUser.name }</span></Link>)
        }
        
    }

    render() {
        window.addEventListener('storage', () => {
            window.location.reload()
        })    

        return (
            <Fragment>
                <header>
                    <div className="header--top d-none d-md-block">
                        <div className="header--top-left float-left d-flex">
                            <div className="times d-flex align-items-center"><img src={require('./../../assets/images/Green Shop/lock-hd.png')} alt="lock" /><span>Open time: 8:00 - 18:00 Monday - Sunday</span></div>
                            <div className="social d-flex">
                                <a href="#a">
                                    <figure><img src={require('./../../assets/images/Green Shop/facebook.png')} alt="facebook" /></figure></a><a href="#a">
                                    <figure><img src={require('./../../assets/images/Green Shop/twitter.png')} alt="twitter" /></figure></a><a href="#a">
                                    <figure><img src={require('./../../assets/images/Green Shop/t.png')} alt="t" /></figure></a><a href="#a">
                                    <figure><img src={require('./../../assets/images/Green Shop/v.png')} alt="v" /></figure>
                                </a>
                            </div>
                        </div>
                        <div className="header--top-right float-right">{ this.showLoginUser() }<Link className="d-inline-block" to="/signup"><img src={require('./../../assets/images/Green Shop/signup.png')} alt="signup" /><span>Đăng kí</span></Link></div>
                    </div>


                    <div className="header--content d-flex">
                        <div className="header-mobile d-block d-sm-none"><img src={require('./../../assets/images/Green Shop/GreenShop1.png')} alt="gs-mobile" /></div>
                        <div className="header--content-name d-none d-sm-flex">
                            <figure><img src={require('./../../assets/images/Green Shop/hoa-bg.png')} alt="hoa_bg" /></figure>
                        </div>
                        <div className="header--content-search d-none d-md-flex align-items-center w-100 justify-content-end">
                            <div className="search">
                                <div className="info-contact"><i className="fas fa-phone"></i><span>HỖ  TRỢ : (04) 6674 2332 - (04) 3786 8904</span></div>
                                <div className="search--input position-relative">
                                    <input className="w-100 border-0 d-block px-4" type="text" placeholder="Tìm kiếm..." /><span></span><img className="position-absolute" src={require('./../../assets/images/Green Shop/search.png')} alt="Search" />
                                </div>
                            </div><Link to="/cart"><img src={require('./../../assets/images/Green Shop/cart.png')} alt="giỏ hàng" /></Link><span>{ this.state.numberProduct } sản phẩm</span>
                        </div>
                    </div>

                </header>

                <nav className="d-flex align-items-center">
                    <div className="icon-menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="menu-hidden d-sm-none">
                        <div className="input-hidden d-inline-block">
                            <input type="text" /><img src={require('./../../assets/images/Green Shop/search-white.png')} alt="search" />
                        </div><img className="d-inline-block" src={require('./../../assets/images/Green Shop/cart-white.png')} alt="cart-white" />
                    </div>
                    <ul className="d-none d-sm-flex mb-0">
                        {this.menuHeader(menu)}
                    </ul>
                </nav>

            </Fragment >
        );
    }
    menuHeader = (menu) => {
        let custormLink = '';
        custormLink = menu.map((value, index) => {
            return (
                <MenuCustomLink key={index} path={value.path} exact={value.exact} label={value.label} sub={value.sub} />
            );
        })
        return custormLink;
    }
}

export default header;