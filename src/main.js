import './less/common.less'
import Vue from 'vue'
import router from './router/index'
import App from './App.vue'

import { Button } from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'

Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
