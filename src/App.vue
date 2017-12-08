<template lang="jade">
  #app
    router-view
</template>

<script>
export default {
  name: 'app',
  watch: {
    '$route'(){
      console.log('最外层App.vue对$route的监听');
    }
  }
}
</script>

<style>
#app {
  width: 100%;
}
</style>
