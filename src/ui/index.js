/*
* UI组件管理
*/
import {
  Row,
  Col,
  Button,
  Input
} from 'element-ui'

export default {
  install(Vue, options){
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Button.name, Button)
    Vue.component(Input.name, Input)
  }
}
