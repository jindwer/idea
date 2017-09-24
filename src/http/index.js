/*
* 请求封装类别
*/
import axios from 'axios'

export default {
  install(Vue, options){
    Vue.prototype.$http = {
      get(url){
        console.log(url);
      },
      post(){

      }
    }
  }
}
