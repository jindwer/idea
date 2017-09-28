/*
* APP的路由文件
*/
import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from './router.config.js'

Vue.use(Router)

//路由配置
const router = new Router(RouterConfig)

//路由钩子
router.beforeEach( (to, from, next) => {
  if(to.meta.requiresAuth){
    next({name:'login'});
  }
  next();
});
router.afterEach(route => {

});

export default router
