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
        path: '/list-product',
        label: 'sản phẩm',
        exact: false,
        sub: {
            label: 'Chi tiết sản phẩm',
        }
    },
    {
        path: '/',
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