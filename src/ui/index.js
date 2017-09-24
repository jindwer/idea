/*
* UI组件管理
*/
import { Button } from 'element-ui'

export default {
  install(Vue, options){
    Vue.component(Button.name, Button)
  }
}
