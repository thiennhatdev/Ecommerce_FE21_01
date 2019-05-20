import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import Button from '../commons/button/Button';
import { getUser, editUser } from './../../action/action';
import { connect } from 'react-redux';
class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
            
        }
    }
    changeSignin = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
        this.props.signin();
        
    }
    
    clickSignin = () => {
        const {email, password} = this.state;
        const { getAllUser } = this.props;
        if(email ==='') {
            alert('Bạn chưa nhập email!');
            return false
        } else if (password === ''){
            alert('Bạn chưa nhập mật khẩu!')
            return false
        } 
        
        const account = getAllUser.filter((val) => {
            return val.email === email && val.password === password ;
        })
        if(account.length === 0) {
            // if account haven't on db
            alert('Đăng nhập không thành công')
            return false;
        } else {
            // if account have on db
            if(localStorage.getItem('profileUser') === null) {
                localStorage.setItem('profileUser',JSON.stringify(account[0]))
        
                // get product on data
                this.props.signin()
                const user = JSON.parse(localStorage.getItem('profileUser'))
                let userNeedFind = this.props.getAllUser.filter((val) => {
                    return val.id === user.id
                })
                let productHad = userNeedFind[0].allProduct;
                const productLocal = JSON.parse(localStorage.getItem('productOfUser'))
                var concatAllProduct = [];
                if (productHad) {
                    // localStorage exist product
                    if (productLocal) {
                        concatAllProduct = [...productHad, ...productLocal]    
                    }
                     
                } else {
                    // localStorage don't exist product
                    if (productLocal) {
                        concatAllProduct = productLocal    
                        localStorage.setItem('productOfUser',JSON.stringify(concatAllProduct))
                    } 
                }
                // put product local to user
            } 
            // when login success ,will update product from local to db
            this.props.productLocalToUser({allProduct : concatAllProduct},account[0].id)
        }
    }
    

    render() {
        
        
        return (
            <Fragment>
                <main id="signin">
                    <div className="path"><span>Home / </span><span>Đăng nhập</span></div>
                    <div className="signin--content">
                        <div className="signin--content-input">
                            <h4>thông tin các nhân</h4>
                            <div className="input-child">
                                <div className="title-input">
                                    <label>Email của bạn</label>
                                </div>
                                <input type="text" name='email' onChange={ (event) => this.changeSignin(event) }/>
                            </div>
                            <div className="input-child">
                                <div className="title-input">
                                    <label>Mật khẩu</label>
                                </div>
                                <input type="password" name='password' onChange={ (event) => this.changeSignin(event)} />
                            </div>
                            <div className="input-checkbox">
                                <input type="checkbox" />
                                <label>Ghi nhớ tài khoản</label><i>Bạn quên mật khẩu</i>
                            </div>
                            <Link  to='/'>
                            <button className="text-uppercase" onClick={() => this.clickSignin()} >Đăng nhập</button>
                            </Link>
                        </div>
                        <div className="signin--content-question">
                            <h4>bạn chưa có tài khoản</h4>
                            <p>
                                Đăng kí tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn ! ngoài ra còn có rất nhiều chính sách và ưu đãi cho các thành viên citybike</p>
                                <Link to="/signup"><Button name ='đăng ký'/></Link>
                                
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signin: () => {
            dispatch(getUser())
        },
        productLocalToUser : (info,id) => {
            dispatch(editUser(info,id))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        getAllUser: state.signinReducer.allUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)