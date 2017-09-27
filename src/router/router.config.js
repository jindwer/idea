/*
* 路由配置信息
*/
import Index from '../page/index.vue'
import Login from '../page/login.vue'
import Signup from '../page/signup.vue'
import Channel from '../page/channel.vue'
import Detail from '../page/detail.vue'
import Publish from '../page/publish.vue'
import Notfound from '../page/notfound.vue'

export default {
  mode: 'history',
  routes: [
    //主页
    {path: '', name: 'index', component: Index, meta: { requiresAuth: false }},
    //'/'跳转到''
    {path: '/', redirect: ''},
    //登录页面
    {path: '/login', name: 'login', component: Login, meta: { requiresAuth: false }},
    //注册页面
    {path: '/signup', name: 'signup', component: Signup, meta: { requiresAuth: false }},
    //板块页面
    {path: '/channel', name: 'channel', component: Channel, meta: { requiresAuth: true }},
    //详情页面
    {path: '/detail', name: 'detail', component: Detail, meta: { requiresAuth: false }},
    //发布页面
    {path: '/publish', name: 'publish', component: Publish, meta: { requiresAuth: false }},
    //Not Found
    {path: '*', name: 'Not Found', component: Notfound, meta: { requiresAuth: false }}
  ]
}
