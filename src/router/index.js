/*
* APP的路由文件
*/
import Vue from 'vue'
import Router from 'vue-router'

import Index from '../page/index.vue'
import Login from '../page/login.vue'
import Register from '../page/register.vue'
import Channel from '../page/channel.vue'
import Detail from '../page/detail.vue'
import Publish from '../page/publish.vue'
import Notfound from '../page/notfound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //主页
    {path: '', name: 'index', component: Index},
    //'/'跳转到''
    {path: '/', redirect: ''},
    //登录页面
    {path: '/login', name: 'login', component: Login},
    //注册页面
    {path: '/register', name: 'register', component: Register},
    //板块页面
    {path: '/channel', name: 'channel', component: Channel},
    //详情页面
    {path: '/detail', name: 'detail', component: Detail},
    //发布页面
    {path: '/publish', name: 'publish', component: Publish},
    //Not Found
    {path: '*', name: 'Not Found', component: Notfound}
  ]
})
