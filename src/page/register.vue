<template lang="jade">
  #register
    h2 注册页面
    router-link(:to="{ name: 'index', params: {} }") 主页
    router-link(:to="{ name: 'login', params: {} }") 登录
</template>

<script>
export default {
  name: 'register'
}
</script>

<style lang="css">

</style>
