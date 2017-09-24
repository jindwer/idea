<template lang="jade">
  #login
    h1 登录界面
    i
      router-link(:to="{ name: 'index', params: {}}") 回到主页
      router-link(:to="{ name: 'index', params: {} }")
        el-button(type="primary") 回到主页
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: '',
      pwd: ''
    }
  },
  mounted () {
    // console.log(this.$router);
  }
}
</script>

<style lang="less">
  #login{
    width: 100%;
  }
</style>
