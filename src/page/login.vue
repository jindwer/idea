<template lang="jade">
  #action
      .action-pic
        .pic(:xs="{span:24}", :sm="{span:24}", :md="{span:24}", :lg="{span:24}")
            //img(src="" alt="")
      .field-container
        h2 登录
        fieldset
          .input-box
            input(ref="user" type="text" name="user" placeholder="用户名" v-model.trim="user" autofocus autocomplete="off")
            .tip
          .input-box
            input(ref="pwd" type="password" name="pwd" placeholder="密码" v-model.trim="pwd")
            .tip
          button.action-btn(v-bind:disabled="!!status" @click="login()")
            span(v-show="status==0") GO
            span(v-show="status==1") GOING...
            span(v-show="status==2") SUCCESS
          router-link.back(:to="{ name: 'index', params: {} }")
            span 回到主页
          router-link.to-action(:to="{ name: 'signup', params: {} }")
            span 去注册
          router-link.forget.pull-right(:to="{ name: '', params: {} }")
            span 忘记密码?
</template>

<script>
import '../less/loginsign.less'
import Vue from 'vue'
export default {
  name: 'login',
  data () {
    return {
      user: '',
      pwd: '',
      status: 0
    }
  },
  methods: {
    //登录
    login(){
      // console.log(this.$http.get());
      // console.log(this.$parent);
      // console.log(this.$children);
      // console.log(this.$root.$data);
      // console.log(this.$options);
      // console.log(this.$createElement);
      // console.log(Vue.parse);
      // console.log(Vue.compile);
      // this.status = 1;
      // if(!this.user){
      //   this.$refs.user.focus();
      // }else if(!this.pwd){
      //   this.$refs.pwd.focus();
      // }else{
      //     //调用this.$http发起请求
      //     setTimeout(function(){
      //       this.status = 2;
      //       setTimeout(function(){
      //         this.$router.push({name:'index'});
      //       }.bind(this),1000);
      //     }.bind(this),2000);
      //     return;
      // }
      // this.status = 0;
    }
  },
  mounted () {
    // console.log(this.$router);
  }
}
</script>

<style lang="less">

</style>
