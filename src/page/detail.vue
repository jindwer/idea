<template lang="html">
  <div id="detail">
    <h2>idea详情页面</h2>
    <router-link :to="{ name: 'index', params: {} }">回到主页</router-link>
    <router-link :to="{ name: 'channel', params: {} }">回到频道</router-link>
  </div>
</template>

<script>
export default {
  name: 'detail'
}
</script>

<style lang="css">
</style>
