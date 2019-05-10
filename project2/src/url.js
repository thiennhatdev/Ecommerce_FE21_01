import React from 'react';
import Home from './page/home/home';
import Signin from './page/signin/Signin';
import Signup from './page/signup/Signup';
import Page404 from './page/404/page404';
import News from './page/news/news';
import Listproduct from './page/listproduct/list-product';
import Detailproduct from './page/detailproduct/detail-product';
import Cart from './page/cart/cart';
import Contact from './page/contact/contact';
import About from './page/about/about';
import Address from './page/address/address';
import Blog from './page/blog/blog';
import DetailBlog from './page/detailblog/detailblog';
import Order from './page/order/order';
import HomeAdmin from './page/admin/home/homeAdmin';
import UserAdmin from './page/admin/user/userAdmin';
import ListCategories from './page/admin/listcategories/listcategories';
import ListOrder from './page/admin/listorder/listorder';
import ListProduct from './page/admin/listproduct/listproduct';
import ListRequest from './page/admin/listrequest/listrequest';

const url = [
    {
        path : '/',
        exact : true,
        main : ({location})=><Home location={location} />,
    },
    {
        path : '/login',
        exact: false,
        main : ({location})=><Signin location={location} />,
    },
    {
        path : '/signup',
        exact: false,
        main : ({location})=><Signup location={location} />
    },
    {
        path : '/cart',
        exact: false,
        main : ({location})=><Cart location={location} />
    },
    {
        path : '/news',
        exact: false,
        main : ({location})=><News location={location} />
    },
    {
        path : '/contact',
        exact: false,
        main : ({location})=><Contact location={location} />
    },
    {
        path : '/list-product',
        exact: false,
        main : ({location})=><Listproduct location={location} />
    },
    {
        path : '/detail-product',
        exact: false,
        main : ({location})=><Detailproduct location={location} />
    },
    {
        path : '/about',
        exact: false,
        main : ({location})=><About location={location} />
    },
    {
        path : '/address',
        exact: false,
        main : ({location})=><Address location={location} />
    },
    {
        path : '/blog',
        exact: false,
        main : ({location})=><Blog location={location} />
    },
    {
        path : '/detail-blog',
        exact: false,
        main : ({location})=><DetailBlog location={location} />
    },
    {
        path : '/order',
        exact: false,
        main : ({location})=><Order location={location} />
    },
    {
        path :'/homeAdmin',
        exact: false,
        main : HomeAdmin,
    },
    {
        path :'/listCategory',
        exact: false,
        main : ListCategories
    },
    {
        path :'/listOrder',
        exact: false,
        main : ListOrder
    },
    {
        path :'/listProduct',
        exact: false,
        main : ListProduct,
    },
    {
        path :'/listRequest',
        exact: false,
        main : ListRequest,
    },
    {
        path :'/userAdmin',
        exact: false,
        main : UserAdmin,
    },
    {
        path :'',
        exact: false,
        main : Page404,
    },
]

export default url;
