<template lang="jade">
  #index
    Iheader
    Ichannel
    section.body
      .hot-list
        Iitem
      aside
</template>

<script>
import Iheader from '../component/Iheader.vue'
import Ichannel from '../component/Ichannel.vue'
import Iitem from '../component/Iitem.vue'
export default {
  name: 'index',
  components: {
    Iheader,
    Ichannel,
    Iitem
  }
}
</script>

<style lang="less">
  #index{
    width: 100%;
    section.body{
      width: 1000px;
      margin: 2px auto;
      background-color: #F9FAFC;
      padding: 10px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .hot-list{
        width: 694px;
        height: auto;
        padding: 0 10px;
      }
      aside{
        width: 296px;
        height: 100px;
        background-color: yellow;
      }
    }
  }
</style>
