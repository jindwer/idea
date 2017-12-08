<template lang="jade">
  #channel
    .left
      .content
        .icon
          img(src="https://pic4.zhimg.com/f07808da5625fef3607f8b75b770349f_m.jpg" alt="动漫迷")
          .title
            h3 动漫迷
            span 256个话题
    .right
      .content
</template>

<script>
export default {
  name: 'register',
  created () {
    console.log(this.$route.params.id);
  }
}
</script>

<style lang="less">
  #channel{
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px auto;
    .left{
      width: 694px;
      .icon{
        display: flex;
        justify-content: flex-start;
        img{
          width: 50px;
          height: 50px;
          overflow: hidden;
          border-radius: 5px;
        }
        .title{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 50px;
          padding-left: 15px;
          h3{
            font-size: 1rem;
          }
          span{
            font-size: .7rem;
          }
        }
      }
    }
    .content{
      width: 100%;
      padding: 10px;
      background-color: #fff;
      box-shadow: 0 0 5px #999;
      border-radius: 3px;
    }
    .right{
      width: 296px;
    }
  }
</style>
