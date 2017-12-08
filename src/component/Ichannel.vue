<template lang="jade">
  aside.channel
    .channel-list
      ul.clearfix
        router-link(:to="{ name: 'channel', params: {id: 'wenyi'}}")
          li
            img(src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1276597933,211791234&fm=27&gp=0.jpg")
            span 文艺范
            i 203
        router-link(:to="{ name: 'channel', params: {id: 'dongman'}}")
          li
            img(src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=262587227,3901505707&fm=27&gp=0.jpg")
            span 动漫迷
            i 390
</template>

<script>
export default {
  name: 'channel'
}
</script>

<style lang="less">
  .channel{
    width: 100%;
    padding: 5px 0;
    padding-top: 15px;
    .channel-list{
      width: 1000px;
      margin: 0 auto;
      ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          list-style: none;
          margin-right: 20px;
          margin-bottom: 10px;
          height: 36px;
          line-height: 26px;
          padding: 5px;
          background-color: #fff;
          box-shadow: 0 3px 5px #999;
          border: 1px solid #fff;
          border-radius: 5px;
          cursor: pointer;
          &:hover{
            background-color: #1D8CE0;
            border-color: #1D8CE0;
            box-shadow: 0 3px 5px #064c81;
            span{
              color: #fff;
            }
            i{
              color: #F7BA2A;
            }
          }
          img{
            width: 26px;
            height: 26px;
            border-radius: 50%;
            overflow: hidden;
            vertical-align: baseline;
          }
          span{
            display: inline-block;
            font-size: 0.9rem;
            padding: 0 10px 0 5px;
            color: #20A0FF;
          }
          i{
            font-size: 0.7rem;
            color: #F7BA2A;
          }
        }
      }
    }
  }
</style>
