<template lang="jade">
  #register
    h2 板块页面
    router-link(:to="{ name: 'index', params: {} }") 回到主页
    router-link(:to="{ name: 'detail', params: {} }") idea详情
</template>

<script>
export default {
  name: 'register'
}
</script>

<style lang="css">
</style>
