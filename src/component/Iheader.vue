<template lang="jade">
  header
    .navbar
      el-row
        el-col(:xs="{span:12}", :sm="{span:12}", :md="{span:12}", :lg="{span:12}")
          .logo
            router-link(:to="{ name: 'index', params: {} }")
              img(src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" alt="idea")
        el-col(:xs="{span:12}", :sm="{span:12}", :md="{span:12}", :lg="{span:12}")
          .btns
            router-link(:to="{ name: 'login', params: {}}")
              button.login-btn() 登录
            router-link(:to="{ name: 'signup', params: {}}")
              button.sign-btn() 注册
    Ifixmenu
</template>

<script>
import Ifixmenu from './Ifixmenu.vue'
export default {
  name: 'header',
  components: {
    Ifixmenu
  }
}
</script>

<style lang="less">
  header{
    width: 100%;
    height: 50px;
  }
  header .navbar{
    width: 100%;
    height: 50px;
    padding: 10px 0;
    background-color: #1D8CE0;
    overflow: hidden;
    box-shadow: 0 0 5px #000;
    position: fixed;
    z-index: 999;
    top: 0;
    .logo{
      width: 60%;
      max-width: 200px;
      height: 100%;
      padding: 0 10px 0 10px;
      margin-left: 20px;
      img{
        width: auto;
        height: 30px;
      }
    }
  }
  .btns{
    text-align: right;
    padding: 0 50px 0 20px;
    button{
      padding: 0 15px;
      line-height: 32px;
      border: 1px solid #fff;
      border-radius: 3px;
      font-size: 1rem;
      cursor: pointer;
    }
    .login-btn{
      color: #1D8CE0;
      background-color: #FFFFFF;
      margin-right: 30px;
      &:hover{
        background-color: #EFF2F7;
        border-color: #EFF2F7;
      }
      &:active{
        background-color: #E5E9F2;
        border-color: #E5E9F2;
      }
    }
    .sign-btn{
      color: #fff;
      background-color: #20A0FF;
      border-color: #20A0FF;
      &:hover{
        background-color: #189cff;
        border-color: #189cff;
      }
      &:active{
        background-color: #1097fd;
        border-color: #1097fd;
      }
    }
  }
</style>
