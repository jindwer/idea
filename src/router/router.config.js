/*
* 路由配置信息
*/
import Frame from '../page/frame.vue'
import Index from '../page/index.vue'
import Login from '../page/login.vue'
import Signup from '../page/signup.vue'
import Channel from '../page/channel.vue'
import Detail from '../page/detail.vue'
import Publish from '../page/publish.vue'
import People from '../page/people.vue'
import Notfound from '../page/notfound.vue'

export default {
  mode: 'history',
  routes: [
    //内容框架
    { path: '',
      component: Frame,
      children: [
        //主页
        {path: '/', name: 'index', component: Index, meta: { requiresAuth: false }},
        //频道页
        {path: '/channel', name: 'channel', component: Channel, meta: { requiresAuth: false }},
        //详情页面
        {path: '/detail/:id', name: 'detail', component: Detail, meta: { requiresAuth: false }},
        //发布页
        {path: '/publish', name: 'publish', component: Publish, meta: { requiresAuth: false }},
        //个人主页
        {path: '/people/:id', name: 'people', component: People, meta: { requiresAuth: false }}
      ]
    },
    //重定向
      // '/'跳转到''
    {path: '/', redirect: ''},
    //单页面
      // 登录页面
    {path: '/login', name: 'login', component: Login, meta: { requiresAuth: false }},
      // 注册页面
    {path: '/signup', name: 'signup', component: Signup, meta: { requiresAuth: false }},
      // Not Found
    {path: '*', name: 'Not Found', component: Notfound, meta: { requiresAuth: false }}
  ]
}
