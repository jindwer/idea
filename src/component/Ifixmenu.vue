<template lang="jade">
  .fixmenu(:class="{'active': active}")
    .center(@click="active = !active")
      span
    .menu(v-for="(menu, index) in menus", :key="index", :style="active &&　menuPosition(index)")
      router-link(:to="{ name: menu.link, query: menu.query}") {{menu.text}}
</template>

<script>
var base  = 3.14 / 180;
var baseR = 85;
export default {
  name: 'fixmenu',
  data (){
    return {
      active: false,
      menus: [
        { text: '主页', link: 'index', query: {id:1,name:'qqq'}},
        { text: '发布', link: 'publish', query: {id:1,name:'qqq'}},
        { text: '发布', link: 'publish', query: {id:2,name:'www'}}
      ]
    }
  },
  methods: {
    menuPosition (index, r) {
      var l, bd, d;
      l = this.menus.length;
      if(l == 1){
        d = 4.7;
        r = r || baseR;
      }else if(l == 2 || l == 3){
        bd = (l == 2? 60 : 45) * base;
        d  = bd * (index + 1) + 3.14;
        r = r || Math.sqrt(Math.pow(baseR,2)/(2*(1-Math.cos(bd))));
      }else{
        l--;
        bd= (180/l) * base;
        d = bd * index + 3.14;
        r = r || Math.sqrt(Math.pow(baseR,2)/(2*(1-Math.cos(bd))));
      }
      return {
        top: Math.cos(d) * (r - 25) + 'px',
        left: Math.sin(d) * (r - 25) + 'px'
      }
    }
  },
  watch: {
    '$route'(){
      this.active = false
    }
  }
}
</script>

<style lang="less">
  .fixmenu{
      position: fixed;
      z-index: 999;
      top: 300px;
      right: 70px;
      >div{
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        line-height: 43px;
        cursor: pointer;
        &:hover{
          box-shadow: 0 0 5px #222;
        }
      }
      .center{
        top: 0;
        left: 0;
        width: 52px;
        height: 52px;
        z-index: 99;
        background-color: #20A0FF;
        border: 1px solid #20A0FF;
        span{
          position: relative;
          display: inline-block;
          width: 30px;
          height: 4px;
          background-color: #fff;
          border-radius: 2px;
          &::before,&::after{
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-radius: 2px;
            transition: all .2s linear;
          }
          &::before{
            top: 10px;
            transform-origin: left;
          }
          &::after{
            top: -11px;
            transform-origin: left;
          }
        }
      }
      .menu{
        z-index: 98;
        top: 1px;
        left: 1px;
        background-color: rgba(0, 0, 0, .5);
        line-height: 50px;
        transition: all .2s linear;
        overflow: hidden;
        a{
          display: block;
          color: #20A0FF;
        }
      }
      &.active{
        .center{
          background-color: rgba(0, 0, 0, .5);
          span{
            background-color: transparent;
            &::before{
              background-color: #20A0FF;
              left: 4px;
              transform: rotateZ(-45deg);
            }
            &::after{
              background-color: #20A0FF;
              transform: rotateZ(45deg);
              left: 4px;
            }
          }
        }
        .menu{
          background-color: #20A0FF;
          a{
            color: #fff;
          }
        }
      }
  }
</style>
