import React, { Fragment } from 'react';
import Item from './item';
import FilterPrice from './filterprice';

class list_product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: null,
            display: true,
        }
    }

    filterName = (event) => {
        var name = event.target.innerText;
        var category = this.props.product.category;
        var filterName = null;
        for (let i = 0; i < category.length; i++) {
            if (category[i].name === name) {
                filterName = category[i];
                break;
            }
        }
        this.setState({
            filterName: filterName,
            display: !this.state.display
        });
    }

    displayCategory = props => {
        let item = '';
        item = props.map((value, index) => {
            return (
                <li onClick={(event) => this.filterName(event)} key={index}>{value.name}</li>
            );
        });
        return item;
    }
    filterPrice = (e,e1) => {
        var category = this.props.product.category;
        var price_left = e ;
        var price_right = e1;
        var filterName = null;
        var item = [];
        for (let i = 0; i < category.length; i++) {
            for( let j =0; j<category[i].product.length;j++ ){
                if( category[i].product[j].price_left >= price_left && category[i].product[j].price_left <= price_right ){
                   
                    item.push(category[i].product[j]);
                    filterName = {  ...category[i] , product : [...item] }
                }
            }
        }
        this.setState({
            filterName: filterName,
            display: !this.state.display
        });
    }
    
    render() {
        var { filterName, display } = this.state;
        var item = display === false ? '' : <Item product={filterName} />;
        return (
            <Fragment>
                <main className="list" id="list-product">
                    <div className="path"><span>Home / </span><span>Danh sách sản phẩm</span></div>
                    <section>
                        <aside>
                            <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">Danh mục sản phẩm</span>
                            </div>
                            <ul>
                                {this.displayCategory(this.props.product.category)}
                            </ul>
                            <div className="title d-flex justify-content-between align-items-center"><span className="text-capitalize">Tìm theo giá</span>
                            </div>
                            <FilterPrice filterPrice={this.filterPrice} />
                        </aside>
                        <article className="arti">
                            <div className="banner-list"></div>
                            <div className="select-list d-flex justify-content-between align-items-center">
                                <div className="nav nav-tabs"><a className="nav-item nav-link active" id="nav-grid-tab" href="#nav-grid" data-toggle="tab" >   <img src={require('./../../assets/images/Green Shop/list2.png')} alt="icon-list" /></a><a className="nav-item nav-link" id="nav-list-tab" href="#nav-list" data-toggle="tab"><img src={require('./../../assets/images/Green Shop/list1.png')} alt="icon-list" /></a></div>
                                <div className="option-select d-flex">
                                    <div className="select-item"><span >Sắp xếp theo</span>
                                        <select>
                                            <option>Tên sản phẩm</option>
                                        </select>
                                    </div>
                                    <div className="select-item"><span>Show</span>
                                        <select>
                                            <option>15</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-grid" aria-labelledby="nav-grid-tab">
                                    <div className="list-content">
                                        {item}
                                    </div>
                                </div>
                            </div>
                            <div className="pagination">
                                <ul className="d-flex ml-auto">
                                    <li>Trang trước</li>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>Trang sau</li>
                                </ul>
                            </div>
                        </article>
                    </section>
                </main>
            </Fragment>
        );
    }
}
export default list_product;
