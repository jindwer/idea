<template lang="html">
  <div id="login">
    <h1>登录页面</h1>
    <i><router-link :to="{ name: 'index', params: {} }">回到主页</router-link></i>
    <el-button type="primary"><router-link :to="{ name: 'index', params: {} }">回到主页</router-link></el-button>
  </div>
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
