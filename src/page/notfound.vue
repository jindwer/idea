<template lang="html">
  <div id="notfound">
    <h2>404页面</h2>
    <i><router-link :to="{ name: 'index', params: {} }">回到主页</router-link></i>
  </div>
</template>

<script>
export default {
  name: 'notfound'
}
</script>

<style lang="css">

</style>
