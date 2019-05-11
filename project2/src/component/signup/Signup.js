import React, { Fragment } from 'react';
import Button from '../commons/button/Button';
import { connect } from 'react-redux';
import { addUser } from './../../action/action';
// const uuidv1 = require('uuid/v1');


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            name : '',
            phone : '',
            email : '',
            website : '',
            password : '',
            repassword : ''
        }
    }
    
    changeSignup = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
    }

    clickSignup = () => {
        const { phone, email, password, repassword } = this.state;
        // validate phone 
        function checkPhone(phone) {
            return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/.test(phone)
        }
        let isPhone = checkPhone(phone);
        if(!isPhone) {
            alert('Số điện thoại không hợp lệ !')
        }

        // validate email
        function checkEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        }
        let isEmail = checkEmail(email);
        if(!isEmail) {
            alert('Email không đúng')
        }
        // validate pass
        if(password !== repassword) {
            alert('Mật khẩu không khớp')
        }
        this.props.signup(this.state)
        
    }
    render() {
        return (
            <Fragment>

                <main id="signup">
                    <div className="path"><span>Home / </span><span>Đăng ký</span></div>
                    <div className="info--customer">
                        <div className="info--customer-title">
                            <h4 className="text-uppercase">thông tin các nhân</h4>
                        </div>
                        <div className="info--customer-content d-flex">

                            <div className="left">
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Họ và tên</label><small> * :</small>
                                    </div>
                                    <input type="text" name='name' onChange={ (event) => this.changeSignup(event) }/>
                                </div>
                                
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Số ĐT</label><small> * :</small>
                                    </div>
                                    <input type="text" name='phone' onChange={ (event) => this.changeSignup(event) }/>
                                </div>
                                <input type="checkbox" id="signup-email" />
                                <label>Đăng ký nhận thông tin qua email</label>
                            </div>

                            <div className="right">
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Địa chỉ email</label><small> * :</small>
                                    </div>
                                    <input type="text" name='email' onChange={ (event) => this.changeSignup(event) }/>
                                </div>
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Website của bạn</label><small> * :</small>
                                    </div>
                                    <input type="text" name='website' onChange={ (event) => this.changeSignup(event) }/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info--customer">
                        <div className="info--customer-title">
                            <h4 className="text-uppercase">thông tin tài khoản</h4>
                        </div>
                        <div className="info--customer-content d-flex">
                            <div className="left">
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Mật khẩu</label><small> * :</small>
                                    </div>
                                    <input type="text" name='password' onChange={ (event) => this.changeSignup(event) }/>
                                </div>
                            </div>
                            <div className="right">
                                <div className="input-child">
                                    <div className="title-input">
                                        <label>Nhập lại mật khẩu</label><small> * :</small>
                                    </div>
                                    <input type="text" name='repassword' onChange={ (event) => this.changeSignup(event) }/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-signup">
                        <Button name ='quay lại' />
                        <button className="text-uppercase" onClick = { () => this.clickSignup() } >Đăng ký</button>
                    </div>
                </main>
            </Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signup: (info) => {
            dispatch(addUser(info))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)