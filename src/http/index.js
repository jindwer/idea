/*
* 请求封装类别
*/
import axios from './axios.interceptors.js'
import apis from './apis.js'

export default {
  install(Vue, options){
    Vue.prototype.$http = {
      get: function(name, success, error, config){
        console.log(axios.defaults);
      },
      post: function(name, data, success, error, config){

      }
    }
  }
}
//获得url
function getUrl(name){
  var url = '';
  for(var k in apis){
    if(k == name){
      if(apis[k].isDebug){
        url = apis[k].debugUrl;
      }else{
        url = apis[k].url;
      }
    }
  }
  return url?url:name;
}
//状态码的处理
function handlerStatus(){

}
