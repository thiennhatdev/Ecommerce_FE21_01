import React, { Fragment } from 'react';

class news extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="section-5">
                    <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">tin tức</span>
                    </div>
                    <div className="wrap-new">
                        <div className="new"><img className="w-100" src={require('./../../assets/images/Green Shop/new3.png')} alt="ảnh" /><i>Thứ 7, ngày 31, tháng 12, năm 2019</i><a href="#a">
                            <h4>15 thiết kế phòng ngủ vạn người mê</h4></a>
                            <p>Cùng Sài Gòn Hoa tìm hiểu vài xu hướng thiết kế  sân vườn được ưa chuộng hiện nay nhé ! kết hợp hàng rào</p><span className="font-italic">Đọc tiếp    </span>
                        </div>
                        <div className="new"><img className="w-100" src={require('./../../assets/images/Green Shop/new2.png')} alt="ảnh" /><i>Thứ 2, ngày 31, tháng 3, năm 2014</i><a href="#a">
                            <h4>15 thiết kế phòng ngủ vạn người mê</h4></a>
                            <p>Cùng Sài Gòn Hoa tìm hiểu vài xu hướng thiết kế  sân vườn được ưa chuộng hiện nay nhé ! kết hợp hàng rào</p><span className="font-italic">Đọc tiếp    </span>
                        </div>
                        <div className="new"><img className="w-100" src={require('./../../assets/images/Green Shop/new4.png')} alt="ảnh" /><i>Thứ 5, ngày 31, tháng 5, năm 2012</i><a href="#a">
                            <h4>15 thiết kế phòng ngủ vạn người mê</h4></a>
                            <p>Cùng Sài Gòn Hoa tìm hiểu vài xu hướng thiết kế  sân vườn được ưa chuộng hiện nay nhé ! kết hợp hàng rào</p><span className="font-italic">Đọc tiếp    </span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default news;