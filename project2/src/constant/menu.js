export const menu = [
    {
        path: '/',
        label: 'trang chủ',
        exact: true,
        sub: null
    },
    {
        path: '/about',
        label: 'giới thiệu ',
        exact: false,
        sub: null
    },
    {
        path: '/listproduct',
        label: 'sản phẩm',
        exact: false,
        sub: {
            label: 'Chi tiết sản phẩm',
        }
    },
    {
        path: '/asd',
        label: 'sản phẩm mới',
        exact: false,
        sub: {
            label: 'sản phẩm mới 1',
            label2: 'sản phẩm mới 2'
        }
    },
    {
        path: '/news',
        label: 'tin tức',
        exact: false,
        sub: null
    },
    {
        path: '/contact',
        label: 'liên hệ',
        exact: false,
        sub: null
    },
]

export const price = [
    {
        price_left: 200,
        price_right: 400
    },
    {
        price_left: 400,
        price_right: 600
    },
    {
        price_left: 600,
        price_right: 800
    },
    {
        price_left: 800,
        price_right: 1000
    },
]

export const category = [
    {
        name: 'Loại Cây Chậu Treo',
        to: '/admin/category/1'
    },
    {
        name: 'Loại Cây Có Hoa',
        to: '/admin/category/2'
    },
    {
        name: 'Loại Cây Dây Leo',
        to: '/admin/category/3'
    },
    {
        name: 'Loại Cây Để Bàn',
        to: '/admin/category/4'
    },
    {
        name: 'Loại Cây Trang Trí',
        to: '/admin/category/5'
    },
    {
        name: 'Loại Cây Nội Thất',
        to: '/admin/category/6'
    }
]

export const img = {
    width: '102px',
    height: '43px',
}
export const img_replace = {
    width: '76%'
}
export const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.466932100143!2d108.20769987809705!3d16.02127162629135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421989ed6118eb%3A0xe5c0365c3071ef6b!2zxJDhu5lpIEPhuqVuLCBLaHXDqiBUcnVuZywgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1553325021464"
export const stylemap = {
    border: '0', width: '600', height: '450', frameborder: '0'
}
export const stylearea= {
    padding: '9% 18%',
    backgroundColor : 'rgba(0,0,0,0.4)',
    color: 'white'
}
export const infoItem = [
    {
        label : 'User',
        img : '/images/Admin/user.png'
    },
    {
        label : 'Order',
        img : '/images/Admin/order.png'
    },
    {
        label : 'Product',
        img : '/images/Admin/product.png'
    },
    {
        label : 'Category',
        img : '/images/Admin/request.png'
    },
    {
        label : 'Request',
        img : '/images/Admin/user.png'
    }
]

