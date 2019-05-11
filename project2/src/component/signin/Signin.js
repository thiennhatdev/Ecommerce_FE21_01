import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import Button from '../commons/button/Button';
import { getUser } from './../../action/action';
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
        } else if (password === ''){
            alert('Bạn chưa nhập mật khẩu!')
        } 
        
        const account = getAllUser.filter((val) => {
            return val.email === email && val.password === password ;
        })
        if(account.length === 0) {
            alert('Đăng nhập không thành công')
        } else {
            if(localStorage.getItem('profileUser') === null) {
                localStorage.setItem('profileUser',JSON.stringify(account[0]))
            }
            window.location.href = '/'
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
                            <button className="text-uppercase" onClick={() => this.clickSignin()} >Đăng nhập</button>
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
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        getAllUser: state.signinReducer.allUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)