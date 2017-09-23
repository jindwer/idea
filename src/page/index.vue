<template lang="html">
  <div id="index">
    <h2>主页</h2>
    <ul>
      <li><router-link :to="{ name: 'login', params: {} }"><i>登录</i></router-link></li>
      <li><router-link :to="{ name: 'register', params: {} }"><i>注册</i></router-link></li>
      <li><router-link :to="{ name: 'channel', params: {} }"><i>板块</i></router-link></li>
      <li><router-link :to="{ name: 'publish', params: {} }"><i>发布想法</i></router-link></li>
    </ul>
    <h6>测试内部less</h6>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="less">
  
</style>
