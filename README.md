## Time:
  2017年9月23日 星期六
## 架构
  vue vue-router axios webpack less jade
## 文件结构
  -- src   源码主文件夹  
  ---- assets 资源文件(图片,字体)  
  ---- http 请求封装  
  ------ apis.js 接口配置  
  ------ axios.config.js axios基础配置  
  ------ axios.interceptors.js 注入拦截器的axios  
  ------ index.js 封装的axios请求   
  ---- less 单样式文件  
  ------ common.less 公共样式  
  ---- page 页面组件  
  ---- router 路由  
  ------ router.config.js 页面组件路由配置  
  ------ index.js 注入路由拦截器的路由对象  
  ---- ui ui组件(主要是引用element-ui)  
  ------ index.js 引入外部组件
  ---- utils 项目工具组件(如弹出框，提示语之类)  
  ---- App.vue 容器组件
  ---- main.js 入口文件(组合各个功能到app中)  
  ---- index.html 项目访问文件
