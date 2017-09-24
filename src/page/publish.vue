<template lang="jade">
  #publish
    h2 发布idea
    i
      router-link(:to="{ name: 'index', params: {} }") 回到主页
</template>

<script>
export default {
  name: 'publish'
}
</script>

<style lang="css">
</style>
