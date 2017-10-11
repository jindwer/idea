/*
* UI组件管理
*/
import {
  Row,
  Col
} from 'element-ui'

export default {
  install(Vue, options){
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
  }
}
