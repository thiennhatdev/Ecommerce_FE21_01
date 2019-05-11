import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { editUser } from './../../action/action';
import { connect } from 'react-redux';
class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : {},
            name : JSON.parse(localStorage.getItem('profileUser')).name,
            phone : JSON.parse(localStorage.getItem('profileUser')).phone,
            email : JSON.parse(localStorage.getItem('profileUser')).email,
            gender : '',
            day : '',
            month : '',
            year : '',
            old_password : '',
            password : '',
            re_new_password : '',
            statusAccount : true
        }
    }
    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('profileUser'))
        if(user) {
            this.setState({
                user 
            })
        }
    }
    // logout user
    logout = () => {
        localStorage.removeItem('profileUser')
    }

    // change info user
    editUser =(event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }

    clickUpdateUser = (event) => {
        const { old_password, re_new_password, phone, name, gender,day,month,year,password, email } = this.state;
        const user = JSON.parse(localStorage.getItem('profileUser'))
        event.preventDefault();
        
        // validate phone 
        function checkPhone(phone) {
            return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/.test(phone)
        }
        let isPhone = checkPhone(phone);
        if(!isPhone) {
            alert('Số điện thoại không hợp lệ')
        }
        // check password
        if(old_password !== user.password) {
            alert('Mật khẩu cũ không đúng');
            return false
        } else if (password !== re_new_password) {
            alert('Mật khẩu không khớp !')
            return false;
        }
        let userNew = {
            name,
            phone,
            gender,
            day,
            month,
            year,
            password,
            email
        }
        
        this.props.changeUser(userNew,user.id);
        // this.setState({
        //     statusAccount : true
        // })
        
            localStorage.setItem('profileUser',JSON.stringify(userNew));
        
    }
    statusAccount = () => {
        this.setState({
            statusAccount : false
        })
    }
    statusAccount1 = () => {
        this.setState({
            statusAccount : true
        })
    }
    
    render() {
        const { user, statusAccount } = this.state;
        const { getUserEdit } = this.props; 

        let showInfoAccount;
        
        if(statusAccount) {
            if (getUserEdit === null) {
                showInfoAccount = (
                    /* Info account */
                    <div className='content-right col-8 bg-white px-5 '>
                        <h1 className='text-uppercase py-4'>Thông tin tài khoản</h1>
                        <p className = 'py-3'><b>Tên : </b> Chưa có </p>
                        <p className = 'py-3'><b>Số điện thoại : </b>Chưa có </p>
                        <p className = 'py-3'><b>Email : </b> Chưa có </p>
                        <p className = 'py-3'><b>Ngày,tháng,năm sinh : </b>  Chưa có  </p>
                        <p className = 'py-3'><b>Giới tính : </b> Chưa có </p>
                    </div>
                /* Info account */)
                } else {
                showInfoAccount = (
                    /* Info account */
                    <div className='content-right col-8 bg-white px-5 '>
                        <h1 className='text-uppercase py-4'>Thông tin tài khoản</h1>
                        <p className = 'py-3'><b>Tên : </b> { getUserEdit.name }  </p>
                        <p className = 'py-3'><b>Số điện thoại : </b> { getUserEdit.phone }</p>
                        <p className = 'py-3'><b>Email : </b>  { getUserEdit.email }</p>
                        <p className = 'py-3'><b>Ngày,tháng,năm sinh : </b>  { getUserEdit.day  }/ { getUserEdit.month }/ { getUserEdit.year }</p>
                        <p className = 'py-3'><b>Giới tính : </b>  { getUserEdit.gender }</p>
                    </div>
                /* Info account */
                )
            }
            
        } else {
            showInfoAccount = (
                /* Update account */
                <div className="content-right col-8 px-5 bg-white">
                <h1 className="have-margin text-uppercase py-4 font-weight-bold">Cập nhật tài khoản</h1>
                <div className="account-profile register-form col-6">
                    <form className="content" method="post" action="/customer/account/edit" id="edit-account">
                    <input type="hidden" name="TIKI_CSRF_TOKEN" defaultValue="R3k5bFJObkZMTjlwOTROcGJIdmYzdz09" />
                    <input type="hidden" name="verify" defaultValue={1} />
                    <div className="form-group">
                    <label className="control-label" htmlFor="full_name">Họ tên </label>
                    <div className="input-wrap">
                        <input type="text" name="name" className="form-control" id="full_name" defaultValue={ user.name } placeholder="Họ tên" onChange={ (event) => this.editUser(event) } />
                        <span className="help-block" />
                    </div>
                    </div>
                    <div className="form-group">
                    <label className="control-label" htmlFor="phone_number">Số điện thoại</label>
                    <div className="input-wrap">
                        <input type="text"   className="form-control" name="phone" id="phone_number" placeholder="Số điện thoại" defaultValue= { user.phone } onChange={ (event) => this.editUser(event) } />
                    </div>
                    </div>
                    <div className="form-group">
                    <label className="control-label" htmlFor="email">Email</label>
                    <div className="input-wrap">
                        <input type="email" disabled defaultValue={ user.email } className="form-control" name="email" id="form_email" placeholder="Email" />
                    </div>
                    </div>
                    <div className="form-group gender-select-wrap" id="register_name">
                    <label className="control-label" htmlFor="pasword">Giới tính</label>
                    <div className="input-wrap">
                        <div className="row py-3">
                        <div className="col-xs-4 col-6">
                            <label>
                            <input type="radio" name="gender" defaultValue='nam'  id="gender_male" className="gender" onChange={ (event) => this.editUser(event) } />
                            <span>
                                <i className="ico" />
                            </span>
                            Nam
                            </label>
                        </div>
                        <div className="col-xs-4">
                            <label>
                            <input type="radio" name="gender" defaultValue="nữ" id="gender_female" className="gender" onChange={ (event) => this.editUser(event) } />
                            <span>
                                <i className="ico" />
                            </span>
                            Nữ
                            </label>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="form-group ">
                    <label className="control-label no-lh" htmlFor="birthdate">
                        Ngày sinh
                        <span>(Không bắt buộc)</span>
                    </label>
                    <div className="input-wrap">
                        <div id="birthday-picker" className="birthday-picker"><fieldset className="birthday-picker  row">
                            <select className="mb-2 birth-day form-control col-4" defaultValue= { user.day } name="day" onChange={ (event) => this.editUser(event) }><option value={0}>Ngày</option><option value={1}>1</option><option value={2}>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option><option value={6}>6</option><option value={7}>7</option><option value={8}>8</option><option value={9}>9</option><option value={10}>10</option><option value={11}>11</option><option value={12}>12</option><option value={13}>13</option><option value={14}>14</option><option value={15}>15</option><option value={16}>16</option><option value={17}>17</option><option value={18}>18</option><option value={19}>19</option><option value={20}>20</option><option value={21}>21</option><option value={22}>22</option><option value={23}>23</option><option value={24}>24</option><option value={25}>25</option><option value={26}>26</option><option value={27}>27</option><option value={28}>28</option><option value={29}>29</option><option value={30}>30</option><option value={31}>31</option></select>
                            <select className="mb-2 birth-month form-control col-4" name="month" defaultValue= { user.month } onChange={ (event) => this.editUser(event) }><option value={0}>Tháng</option><option value={1}>01</option><option value={2}>02</option><option value={3}>03</option><option value={4}>04</option><option value={5}>05</option><option value={6}>06</option><option value={7}>07</option><option value={8}>08</option><option value={9}>09</option><option value={10}>10</option><option value={11}>11</option><option value={12}>12</option></select>
                            <select className="mb-2 birth-year form-control col-4" name="year" defaultValue= { user.year } onChange={ (event) => this.editUser(event) }><option value={0}>Năm</option><option value={2019}>2019</option><option value={2018}>2018</option><option value={2017}>2017</option><option value={2016}>2016</option><option value={2015}>2015</option><option value={2014}>2014</option><option value={2013}>2013</option><option value={2012}>2012</option><option value={2011}>2011</option><option value={2010}>2010</option><option value={2009}>2009</option><option value={2008}>2008</option><option value={2007}>2007</option><option value={2006}>2006</option><option value={2005}>2005</option><option value={2004}>2004</option><option value={2003}>2003</option><option value={2002}>2002</option><option value={2001}>2001</option><option value={2000}>2000</option><option value={1999}>1999</option><option value={1998}>1998</option><option value={1997}>1997</option><option value={1996}>1996</option><option value={1995}>1995</option><option value={1994}>1994</option><option value={1993}>1993</option><option value={1992}>1992</option><option value={1991}>1991</option><option value={1990}>1990</option><option value={1989}>1989</option><option value={1988}>1988</option><option value={1987}>1987</option><option value={1986}>1986</option><option value={1985}>1985</option><option value={1984}>1984</option><option value={1983}>1983</option><option value={1982}>1982</option><option value={1981}>1981</option><option value={1980}>1980</option><option value={1979}>1979</option><option value={1978}>1978</option><option value={1977}>1977</option><option value={1976}>1976</option><option value={1975}>1975</option><option value={1974}>1974</option><option value={1973}>1973</option><option value={1972}>1972</option><option value={1971}>1971</option><option value={1970}>1970</option><option value={1969}>1969</option><option value={1968}>1968</option><option value={1967}>1967</option><option value={1966}>1966</option><option value={1965}>1965</option><option value={1964}>1964</option><option value={1963}>1963</option><option value={1962}>1962</option><option value={1961}>1961</option><option value={1960}>1960</option><option value={1959}>1959</option><option value={1958}>1958</option><option value={1957}>1957</option><option value={1956}>1956</option><option value={1955}>1955</option><option value={1954}>1954</option><option value={1953}>1953</option><option value={1952}>1952</option><option value={1951}>1951</option><option value={1950}>1950</option><option value={1949}>1949</option><option value={1948}>1948</option><option value={1947}>1947</option><option value={1946}>1946</option><option value={1945}>1945</option><option value={1944}>1944</option><option value={1943}>1943</option><option value={1942}>1942</option><option value={1941}>1941</option><option value={1940}>1940</option><option value={1939}>1939</option><option value={1938}>1938</option><option value={1937}>1937</option><option value={1936}>1936</option><option value={1935}>1935</option><option value={1934}>1934</option><option value={1933}>1933</option><option value={1932}>1932</option><option value={1931}>1931</option><option value={1930}>1930</option><option value={1929}>1929</option><option value={1928}>1928</option><option value={1927}>1927</option><option value={1926}>1926</option><option value={1925}>1925</option><option value={1924}>1924</option><option value={1923}>1923</option><option value={1922}>1922</option><option value={1921}>1921</option><option value={1920}>1920</option><option value={1919}>1919</option><option value={1918}>1918</option><option value={1917}>1917</option><option value={1916}>1916</option><option value={1915}>1915</option><option value={1914}>1914</option><option value={1913}>1913</option><option value={1912}>1912</option><option value={1911}>1911</option><option value={1910}>1910</option><option value={1909}>1909</option><option value={1908}>1908</option><option value={1907}>1907</option><option value={1906}>1906</option><option value={1905}>1905</option><option value={1904}>1904</option><option value={1903}>1903</option><option value={1902}>1902</option><option value={1901}>1901</option><option value={1900}>1900</option><option value={1899}>1899</option></select><input type="hidden" name="birthdate" id="birthdate" /></fieldset></div>
                        <span className="help-block" />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="input-wrap margin">
                        <label className="checkbox">
                            <input type="checkbox" id="is_change_pass" name="is_change_pass" defaultValue="checked" />
                            <span className="ico" /> Thay đổi mật khẩu
                        </label>
                    </div>
                    </div>
                    <div className="password-group" >
                    <div className="form-group">
                        <label className="control-label" htmlFor="old_password">Mật khẩu cũ</label>
                        <div className="input-wrap">
                        <input type="password" name="old_password" className="form-control" id="old_password"  autoComplete="off" placeholder="Nhập mật khẩu cũ" onChange={ (event) => this.editUser(event) }/>
                        <span className="help-block" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="new-password">Mật khẩu mới</label>
                        <div className="input-wrap">
                        <input type="password" name="password" className="form-control" id="new_password"  autoComplete="off" placeholder="Mật khẩu từ 6 đến 32 ký tự" onChange={ (event) => this.editUser(event) }/>
                        <span className="help-block" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="re_new_password">Nhập lại</label>
                        <div className="input-wrap">
                        <input type="password" name="re_new_password" className="form-control" id="re_new_password"  autoComplete="off" placeholder="Nhập lại mật khẩu mới" onChange={ (event) => this.editUser(event) }/>
                        <span className="help-block" />
                        </div>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="input-wrap margin">
                        <input type="hidden" name="customer_birthdate" defaultValue />
                        <button type="submit" className="btn btn-info btn-block btn-update" onClick={ (event) => this.clickUpdateUser(event) }>Cập nhật</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
                
            /* Update account */
            )
        }
        return (
            <main>
                <div className="wrap bg-light py-5">
                    <div className="container-full">
                        <div className="row-style-1 row">
                        <div className="menu-left col-4 px-5">
                            <div className="profiles mb-3">
                                <p className="image"><img src="https://salt.tikicdn.com/desktop/img/avatar.png?v=3" height={45} width={45} alt='profile' /></p>
                                <p className="name">Tài khoản của</p>
                                <h6 className='text-success text-uppercase'>{ user.name }</h6>
                            </div>
                            <div className="menu ">
                            <ul className="" role="menu" aria-labelledby="dropdownMenu1">
                                <li className='py-3  border-top active' onClick={ () => this.statusAccount() } >
                                    Cập nhật tài khoản
                                </li> 
                                <li className='py-3  border-top' onClick={ () => this.statusAccount1() } >
                                <i className="ico ico-user" /> <span>Thông tin  tài khoản</span>
                                </li>
                                <li className='py-3  border-top'>
                                <a href="/"><i className="ico ico-ic-notifications" /> <span>Thông báo của tôi</span> <span className="num-noti-nav" /></a>
                                </li>
                                <li className='py-3  border-top'>
                                <a href="/"> <i className="ico ico-ic-my-order" /> <span>Quản lý đơn hàng</span></a>
                                </li>
                                <Link to='/' >
                                <li className='py-3  border-top' onClick = { () => this.logout() }>
                                <i className="ico ico-ic-my-order" /> <span>Đăng xuất</span>
                                </li>
                                </Link>
                            </ul>
                            </div>
                        </div>
                        
                        { showInfoAccount }
                    </div>
                </div>
                            </div>
            </main>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeUser: (infoEditUser,id) => {
            dispatch(editUser(infoEditUser,id))
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        getUserEdit: state.editProfileUser.editUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)