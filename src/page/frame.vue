<template lang="jade">
  #frame
    Iheader
    router-view
</template>

<script>
import Iheader from '../component/Iheader.vue'
export default {
  name: 'frame',
  components: {
    Iheader
  }
}
</script>

<style lang="less">
  #frame{
    width: 100%;
  }
</style>
