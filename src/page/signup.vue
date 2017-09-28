<template lang="jade">
  #action
    el-row
      .action-pic
        el-row
          el-col.pic(:xs="{span:24}", :sm="{span:24}", :md="{span:24}", :lg="{span:24}")
            img(src="" alt="")
      el-col.field-container(:xs="{span:24}", :sm="{span:12, offset:6}", :md="{span:8, offset:8}", :lg="{span:8, offset:8}")
        h2 注册
        fieldset
          .input-box
            input(type="text" name="user" placeholder="用户名" v-model="user" autofocus autocomplete="off")
            .tip
          .input-box
            input(type="email" name="email" placeholder="邮箱" v-model="email" autocomplete="off")
            .tip
          .input-box
            input(type="email" name="emailre" placeholder="再次输入邮箱" v-model="emailRe" autocomplete="off")
            .tip
          .input-box
            input(type="password" name="pwd" placeholder="密码" v-model="pwd")
            .tip
          .input-box
            input(type="password" name="pwdre" placeholder="再次输入密码" v-model="pwdRe")
            .tip
          button.action-btn(@click="login()") GO
          router-link.back(:to="{ name: 'index', params: {} }")
            span 回到主页
          router-link.to-action.pull-right(:to="{ name: 'login', params: {} }")
            span 去登录
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      user: '',
      email: '',
      emailRe: '',
      pwd: '',
      pwdRe: ''
    }
  }
}
</script>

<style lang="less">

</style>
