<template lang="jade">
  #notfound
    h2 404页面
    i
      router-link(:to="{ name: 'index', params: {} }") 回到主页
</template>

<script>
export default {
  name: 'notfound'
}
</script>

<style lang="css">

</style>
