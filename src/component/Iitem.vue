<template lang="jade">
  .item
    h3.text-blue 最良心的软件可以良心到什么程度？
    .info
      .base
        span.like 788
        span.pv.text-blue 1056
      .content
        .author
          span.text-bold 吉娃娃
          span.address.text-gray.before 兰州大学
          span.sign.text-gray.before 吾尝终日而思矣，不如须臾之所学
        .des
          .summary.clearfix
            img(src="https://pic3.zhimg.com/v2-6c540ff064410555aa3683bf9ded53a6_200x112.jpg")
            p 《清明上河图密码》 看书单狗推荐买的，一开始抱着试试的态度，以为又是现在流行的“密码”系列。 而且拿到书的时候……真的特别大。一种网络小说的装订的迷之审美的土气。 （拿到的时候真的迷之土气……） 但是翻开之后真的被震惊了，作者以《清明上河图》...
              a.text-blue(href="javascript:void(0);") 查看详情
        .feed
          a(href="javascript:void(0);") 收藏
</template>

<script>
export default {
  name: 'item'
}
</script>

<style lang="less">
  .item{
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
    h3{
      font-size: 0.9rem;
    }
    .info{
      display: flex;
      flex-direction: row;
      margin-top: 5px;
      .base{
        display: flex;
        flex-direction: column;
        >span{
          padding: 4px;
          background-color: #eff6fa;
          border-radius: 5px;
          font-size: 0.6rem;
          width: 40px;
          overflow: hidden;
          text-align: center;
          &.pv{
            margin-top: 5px;
          }
          &.like{
            color: #F7BA2A;
            background-color: #565656;
          }
        }
      }
      .content{
        padding-left: 10px;
        flex: 1;
      }
      .author{
        padding: 3px 4px;
        font-size: 0.8rem;
        .before::before{
          content: ',';
          display: inline-block;
          width: 10px;
          text-align: center;
        }
      }
      .des{
        padding: 3px 4px;
        .summary{
          font-size: 0.82rem;
          img{
            border-radius: 5px;
            overflow: hidden;
            float: left;
            width: 200px;
            height: 112px;
            margin-right: 8px;
            margin-bottom: 8px;
          }
          a{
            display: inline-block;
            padding: 0 2px;
            &:hover{
              background-color: #c9e0f2;
            }
          }
        }
      }
      .feed{
        padding: 10px 4px 1px 4px;
        font-size: 0.8rem;
        a{
          color: #aaa;
          &:hover{
            color: #666;
          }
        }
      }
    }
  }
</style>
