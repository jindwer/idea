<template lang="jade">
  #index
    Ichannel
    section.body
      .hot-list
        Iitem(v-for="hot in hotList", :key="hot.id", :item="hot", )
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
  },
  data () {
    return {
      hotList: [
        {
          id: 'a_123_g', title: '最良心的软件可以良心到什么程度？', vp: 1056, focus: 788,
          cover: 'https://pic3.zhimg.com/v2-6c540ff064410555aa3683bf9ded53a6_200x112.jpg',
          author: {id: 'p_123', name: '吉娃娃', col: '兰州大学', des: '吾尝终日而思矣，不如须臾之所学'},
          content: '《清明上河图密码》 看书单狗推荐买的，一开始抱着试试的态度，以为又是现在流行的“密码”系列。 而且拿到书的时候……真的特别大。一种网络小说的装订的迷之审美的土气。 （拿到的时候真的迷之土气……） 但是翻开之后真的被震惊了，作者以《清明上河图》'
        },
        {
          id: 'a_456_g', title: '有哪些“以为会碾压，结果被秒杀” 的例子？', vp: 988, focus: 566,
          cover: null,
          author: {id: 'p_456', name: 'Abel·Kenndy', col: '武汉大学', des: '求贤若渴，求知若愚'},
          content: '开始 用力啊～～啊！～～！ 下来喽下来喽 呵呵 迷之微笑 smile？what？？？？ fuck！ 呵呵呵，嘿嘿嘿 卧槽卧槽卧槽卧槽 卧槽卧槽卧槽卧槽 啊～～～！ (换个姿势) 啊！～～～啊！'
        }
      ]
    }
  }
}
</script>

<style lang="less">
  #index{
    width: 100%;
    section.body{
      width: 1000px;
      margin: 2px auto;
      padding: 10px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      >div,aside{
        height: auto;
        background-color: #F9FAFC;
        box-shadow: 0 0 5px #999;
        border-radius: 3px;
      }
      .hot-list{
        width: 694px;
        padding: 0 10px;
      }
      aside{
        width: 296px;
        height: 100px;
      }
    }
  }
</style>
