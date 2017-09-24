<template lang="jade">
  #detail
    h2 idea详情页面
    router-link(:to="{ name: 'index', params: {} }") 回到主页
    router-link(:to="{ name: 'channel', params: {} }")回到频道
</template>

<script>
export default {
  name: 'detail'
}
</script>

<style lang="css">
</style>
