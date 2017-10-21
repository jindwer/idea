<template lang="jade">
  .item
    router-link(:to="{ name: 'detail', params: {id: item.id} }")
      h3.text-blue(v-text="item.title")
    .info
      .base
        span.like(v-text="item.focus")
        span.pv.text-blue(v-text="item.vp")
      .content
        .author
          router-link(:to="{ name: 'people', params: {id: item.author.id} }")
            span.text-bold(v-text="item.author.name")
          span.address.text-gray.before(v-text="item.author.col")
          span.sign.text-gray.before(v-text="item.author.des")
        .des
          .summary.clearfix
            .img(v-if="item.cover")
              img(:src="item.cover")
            p(v-text="item.content + ' ...'")
            router-link.text-blue(:to="{ name: 'detail', params: {id: item.id} }") 查看详情
        .feed
          a(href="javascript:void(0);") 收藏
</template>

<script>
export default {
  name: 'item',
  props: ['item']
}
</script>

<style lang="less">
  .item{
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
    h3{
      display: inline;
      font-size: 0.9rem;
      &:hover{
        text-decoration: underline;
      }
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
          .img{
            border-radius: 5px;
            overflow: hidden;
            float: left;
            width: 200px;
            height: 112px;
            margin-right: 8px;
            margin-bottom: 8px;
          }
          p{
            display: inline;
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
