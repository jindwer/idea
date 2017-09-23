<template lang="html">
  <div id="register">
    <h2>板块页面</h2>
    <router-link :to="{ name: 'index', params: {} }">回到主页</router-link>
    <router-link :to="{ name: 'detail', params: {} }">idea详情</router-link>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<style lang="css">
</style>
