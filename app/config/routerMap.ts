import { Application } from 'egg';
export default (application: Application) => {
    const { controller } = application;
    interface ServerRouter {
        method: string;
        url: string;
        target: object;
    }
    const routerMap: ServerRouter[] = [
        {
            method: 'post',
            url: '/admin/api/article/list',
            target: controller.admin.list
        },
        {
            method: 'post',
            url: '/admin/api/article/add',
            target: controller.admin.add
        },
        {
            method: 'post',
            url: '/admin/api/article/del',
            target: controller.admin.del
        },
        {
            method: 'get',
            url: '/admin/api/article/:id',
            target: controller.admin.detail
        },
        {
            method: 'get',
            url: '/check',
            target: controller.app.check
        },
        {
            method: 'get',
            url: '/*',
            target: controller.app.home
        },
    ];
    return routerMap;
};