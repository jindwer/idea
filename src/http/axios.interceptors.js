/*
* axios拦截器
*/
import axios from './axios.config.js'

//请求拦截
axios.interceptors.request.use(function(config){

  return config;
},function(err){

  return Promise.reject(err);
});
//响应拦截
axios.interceptors.response.use(function(res){

  return res;
},function(err){

  return Promise.reject(err);
});


export default axios
