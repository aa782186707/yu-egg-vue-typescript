export const article: object = {
    path: '/article',
    component: () => import('@/page/admin/home/index.vue'),
    redirect: '/article/index',
    children: [
        {
            path: 'index',
            component: () => import('@/page/admin/dashboard/index.vue'),
        },
        {
            path: 'list',
            component: () => import('@/page/admin/list/index.vue'),
        },
        {
            path: 'add',
            component: () => import('@/page/admin/write/index.vue')
        },
        {
            path: 'edit/:id',
            component: () => import('@/page/admin/write/index.vue')
        },
        {
            path: 'detail/:id',
            component: () => import('@/page/admin/detail/index.vue')
        }
    ]
};
