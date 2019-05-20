import React from 'react';
import Home from './page/home/home';
import Signin from './page/signin/Signin';
import Signup from './page/signup/Signup';
import Page404 from './page/404/page404';
import News from './page/news/news';
import Listproduct from './page/listproduct/list-product';
import Detailproduct from './page/detailproduct/detail-product';
import Cart from './page/cart/cart';
import About from './page/about/about';
import Address from './page/address/address';
import Blog from './page/blog/blog';
import DetailBlog from './page/detailblog/detailblog';
import HomeAdmin from './page/admin/home/homeAdmin';
import Category from './page/admin/listcategories/listcategories';
import User from './page/admin/user/userAdmin';
import ProductAdmin from './page/admin/listproduct/listproduct';
import Contact from './page/contact/contact';
import Order from './page/admin/listorder/listorder';
import Request from './page/admin/listrequest/listrequest';
import Profile from './page/profile/Profile';
import Paypal from './page/paypal/Paypal';
import Detail from './page/detail/Detail';

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
        path : '/detail-product',
        exact: false,
        main : ({location})=><Detail location={location} />,
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
        path : '/product/:category/:name',
        exact: false,
        main : ({location ,match })=><Detailproduct location={location} match={match} />
    },        
    {
        path : '/list-product',
        exact: false,
        main : ({location})=><Listproduct location={location} />
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
        path : '/paypal',
        exact: false,
        main : ({location})=><Paypal location={location} />
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
        path :'/profile',
        exact: false,
        main :({location})=><Profile location={location} />
    },
    {
        path : '/contact',
        exact : false,
        main : Contact
    },
    {
        path : '/order',
        exact : false,
        main : Order
    },
    {
        path : '/request',
        exact : false,
        main : Request
    },
    {
        path : "/homeAdmin",
        exact : false,
        main : HomeAdmin
    },
    {
        path : "/user",
        exact : false,
        main : User
    },
    {
        path : "/productmanager",
        exact : false,
        main : ProductAdmin
    },
    {
        path : "/admin/category/:id",
        exact : false,
        main : ({match})=><Category match={match} />
    },
    {
        path :'',
        exact: false,
        main : Page404,
    }
]
export default url;
