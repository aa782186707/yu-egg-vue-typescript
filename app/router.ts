
import { Application } from 'egg';
import getRouterMap from './config/routerMap';

export default (application: Application) => {
  const routerMap = getRouterMap(application);
  const { router } = application;
  routerMap.map(route => {
    router[route.method](route.url, route.target);
  });
};