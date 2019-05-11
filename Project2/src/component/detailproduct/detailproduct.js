import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { actFetchProduct } from './../../action/action';
import { FacebookProvider, Like, Comments, ShareButton } from 'react-facebook';

class detailproduct extends React.Component {

    componentWillMount() {
        this.props.FetchProduct();
    }

    render() {
        var { match, product } = this.props;
        var category = match.params.category;
        var name = match.params.name;
        var item = null;
        var itemProduct = null;
        var url = null;
        switch (category) {
            case 'hotProduct':
                item = product.hotProduct;
                url = 'hotProduct';
                for (let i = 0; i < item.length; i++) {
                    if (item[i].bigproduct.name === name) {
                        itemProduct = item[i].bigproduct;
                    }
                    for (let j = 0; j < item[i].smallproduct.length; j++) {
                        if (item[i].smallproduct[j].name === name) {
                            itemProduct = item[i].smallproduct[j];
                        }
                    }
                }
                break;
            case 'productMore':
                item = product.productMore;
                url = 'productMore';
                for (let i = 0; i < item.length; i++) {
                    if (item[i].name === name) {
                        itemProduct = item[i];
                        break;
                    }
                }
            case 'promotion':
                item = product.promotion;
                url = 'promotion';
                for (let i = 0; i < item.length; i++) {
                    if (item[i].name === name) {
                        itemProduct = item[i];
                        break;
                    }
                }
            case 'newproduct':
                item = product.promotion;
                url = 'newproduct';
                for (let i = 0; i < item.length; i++) {
                    if (item[i].name === name) {
                        itemProduct = item[i];
                        break;
                    }
                }
                break;
        }


        return (
            <Fragment>
                <main id="detail-product">
                    <div className="path"><span>Home / </span><span>Cây  dạ lam</span></div>
                    <div className="detail--info d-flex">
                        <div className="galary"><img src={itemProduct !== null ? itemProduct.img : ''} alt="danh dự" />
                            <div className="wrap--galary-item d-flex"><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="danh dự" /><img src={require('./../../assets/images/Green Shop/dalam.png')} alt="dạ lam" /><img src={require('./../../assets/images/Green Shop/caychanchim.png')} alt="chân chim" /><img src={require('./../../assets/images/Green Shop/cota.png')} alt="cota" /><img src={require('./../../assets/images/Green Shop/spx2-14.png')} alt="cota" /></div>
                        </div>
                        <div className="detail--info-content">
                            <h4>{itemProduct !== null ? itemProduct.name : ''}</h4><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" /><br /><span>{itemProduct !== null ? itemProduct.price_left : ''}.000đ</span>
                            <label>{itemProduct !== null ? itemProduct.price_right : ''}.000đ</label>
                            <p>Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.</p>
                            <div className="quantity d-flex align-items-center"><span>Số lượng</span>
                                <li>-</li>
                                <li>1</li>
                                <li>+</li>
                            </div>
                            <div className="wrap-btn d-flex">
                                <button className="text-uppercase">mua ngay</button>
                                <figure><img src={require('./../../assets/images/Green Shop/search.png')} alt="search" /></figure>
                                <figure><img src={require('./../../assets/images/Green Shop/heart.png')} alt="heart" /></figure>
                            </div>

                            <FacebookProvider appId="2277657042277427">
                                <ShareButton href={`https://localhost:3000/product/${url}/${itemProduct !== null ? itemProduct.name : ''}`} >
                                    Share
                                </ShareButton>
                            </FacebookProvider>
                            <div class="fb-share-button" data-href={`https://localhost:3000/product/${url}/${itemProduct !== null ? itemProduct.name : ''}`} data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Chia sẻ</a></div>

                        </div>
                    </div>
                    <div className="detail-info2">
                        <div className="nav nav-tabs"><a className="nav-item nav-link active" id="nav-grid-tab" href="#nav-detail1" data-toggle="tab" onclick="return false">Thông tin sản phẩm    </a><a className="nav-item nav-link" id="nav-list-tab" href="#nav-detail2" data-toggle="tab" onclick="return false">Khách hàng đánh giá</a><a className="nav-item nav-link" id="nav-list-tab" href="#nav-detail3" data-toggle="tab" onclick="return false">Thẻ tag</a></div>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-detail1" aria-labelledby="nav-grid-tab">
                                <p>
                                    Tên phổ thông: Dạ lam, Huỳnh tinh cảnh, Dong vằn.</p>
                                <p>
                                    Tên khoa học: Calathea zebrina</p>
                                <p>
                                    Họ thực vật: Marantaceae (Củ dong).</p>
                                <p>Chiều cao: 0,8-1,2m</p>
                                <p>Cây dạ lam có nguồn gốc từ Brazil, được du nhập và phân bố rộng khắp ở Việt Nam.</p>
                                <p>
                                    Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.
                                    Cây dạ lam thuộc loại cây chịu bóng bán phần hoặc hoàn toàn, nhu cầu nước tương đối cao. Cây được nhân giống từ tách bụi, cây mọc khỏe, tốc độ sinh trưởng nhanh với sức sống mạnh.
                                     Đây là loại cây có dáng đẹp, màu lá mướt mát, tươi khỏe, cây rất phù hợp trồng chậu trang trí nội thất-văn phòng.
                                     Ngoài ra, cây còn có đặc điểm lọc khí, làm xanh mát môi trường, giúp điều hòa không khí, đặc biệt tốt cho những môi trường thường xuyên sử dụng các loại máy móc tảng nhiệt. Có thể bày cây ở hành lang hay ở giữa sảnh, đặt ở cạnh bàn làm việc hoặc trang trí các góc phòng có diện tích trung bình
                                </p>
                            </div>
                            <div className="tab-pane fade" id="nav-detail2" aria-labelledby="nav-list-tab">
                                <p>
                                    Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.</p>
                                <p>
                                    Cây dạ lam thuộc loại cây chịu bóng bán phần hoặc hoàn toàn, nhu cầu nước tương đối cao. Cây được nhân giống từ tách bụi, cây mọc khỏe, tốc độ sinh trưởng nhanh với sức sống mạnh.</p>
                            </div>
                            <div className="tab-pane fade" id="nav-detail3" aria-labelledby="nav-grid-tab">
                                <p>
                                    Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.</p>
                                <p>
                                    Cây dạ lam thuộc loại cây chịu bóng bán phần hoặc hoàn toàn, nhu cầu nước tương đối cao. Cây được nhân giống từ tách bụi, cây mọc khỏe, tốc độ sinh trưởng nhanh với sức sống mạnh.</p>
                            </div>
                        </div>
                    </div>
                    <div className="fb-comments" data-href={`https://localhost:3000/product/${url}/${itemProduct !== null ? itemProduct.name : ''}`} data-width="700" data-numposts="5"></div><div>
                    </div>
                    <FacebookProvider appId="2277657042277427">
                        <Comments href={`https://localhost:3000/product/${url}/${itemProduct !== null ? itemProduct.name : ''}`} />
                    </FacebookProvider>
                    <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">Sản phẩm cùng loại</span>
                        <div className="arrow d-flex">
                            <div className="arrow-left"></div>
                            <div className="arrow-right"></div>
                        </div>
                    </div>

                    <div className="product--relate">
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/cota.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây cọ Nhật</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">250.000 đ</div>
                                    <div className="price--old">250.000 đ</div>
                                </div>
                            </div>
                        </div>
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/dalam.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây Hồng Môn</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">250.000 đ</div>
                                    <div className="price--old">250.000 đ</div>
                                </div>
                            </div>
                        </div>
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/caychanchim.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây Phát Lộc</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">250.000 đ</div>
                                    <div className="price--old">250.000 đ</div>
                                </div>
                            </div>
                        </div>
                        <div className="product position-relative">
                            <figure><img src={require('./../../assets/images/Green Shop/danhdu.png')} alt="hoa" /></figure>
                            <div className="content">
                                <p>Cây Kim Ngân</p><img src={require('./../../assets/images/Green Shop/star.png')} alt="star" />
                                <div className="price">
                                    <div className="price--new">250.000 đ</div>
                                    <div className="price--old">250.000 đ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = dispatch => {
    return {
        FetchProduct: () => {
            dispatch(actFetchProduct());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(detailproduct);