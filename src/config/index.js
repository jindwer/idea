/*
* 2017-10-16
* 全局设置插件
*/

export default {
  install(Vue, options){
      Vue.config.performance   = true //performance性能追踪
      Vue.config.productionTip = false //阻止生成生产环境提示
  }
}
