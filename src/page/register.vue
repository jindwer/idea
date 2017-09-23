<template lang="html">
  <div id="register">
    <h2>注册页面</h2>
    <router-link :to="{ name: 'index', params: {} }">主页</router-link>
    <router-link :to="{ name: 'login', params: {} }">登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<style lang="css">

</style>
