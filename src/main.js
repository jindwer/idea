import './less/common.less'
import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import Http from './http'
import Ui from './ui'


//引入自定义ajax插件
Vue.use(Http)
//引入UI组件
Vue.use(Ui)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
