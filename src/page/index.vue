<template lang="jade">
  #index
    h2 主页
      ul
        li
          router-link(:to="{ name: 'login', params: {} }")
            i 登录
        li
          router-link(:to="{ name: 'signup', params: {} }")
            i 注册
        li
          router-link(:to="{ name: 'channel', params: {} }")
            i 板块
        li
          router-link(:to="{ name: 'publish', params: {} }")
            i 发布想法
      h6 测试内部less
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="less">

</style>
