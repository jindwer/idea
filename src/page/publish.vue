<template lang="jade">
  #publish
    .editor
      input.title.shadow-box(placeholder="标题" v-model.trim="title")
      .class(:class="{'warning': typeEmpty}")
        span(v-for="(type, index) in allType", v-text="type.name", :key="type.id", @click="toggleClass(type.id)", :class="{'active': selectedType.indexOf(type.id)>-1 }")
      Editor.shadow-box(@change="change", :content="content", :height="400", :auto-height="true", :z-index="2", :class="{'active': contentFocus, 'barFixed': barFixed}")
      button.shadow-box.btn.btn-blue.publish-btn(@click="publish") 提交
</template>

<script>
import Iheader from '../component/Iheader.vue'
import VueHtml5Editor from 'vue-html5-editor'
import config from '../pluginsConfig/editor.config.js'
const Editor = new VueHtml5Editor(config)

let editorContent = null, toolBar = null

export default {
  name: 'publish',
  components: {
    Iheader,
    Editor
  },
  data () {
    return {
      title: '',
      content: '',
      typeEmpty: false,
      contentFocus: false,
      barFixed: false,
      allType: [
        {id:'qwe_123',name:'动漫迷'},
        {id:'qwe_456',name:'文艺范'}
      ],
      selectedType: []
    }
  },
  mounted () {
    editorContent = editorContent || this.$el.querySelector('.content')
    toolBar       = toolBar || document.querySelector('.toolbar')
    editorContent.addEventListener('focus', () => {
      this.contentFocus = true
    })
    editorContent.addEventListener('blur', () => {
      this.contentFocus = false
    })
    window.addEventListener('scroll', () => {
      this.barFixed = window.scrollY > 50 ? true : false
    })
  },
  methods: {
    change (content) {
      this.content = content
    },
    publish () {
      let timer
      if(!this.title){
        this.$el.querySelector('.title').focus()
      }else if(!this.selectedType.length){
        this.typeEmpty = true
        clearTimeout(timer)
        timer = setTimeout(()=>{
          this.typeEmpty = false
        },1500)
      }else if(!this.content){
        editorContent.focus()
      }else{
        //提交
      }
    },
    toggleClass (id) {
      let index = this.selectedType.indexOf(id)
      index > -1 ? this.selectedType.splice(index,1) : this.selectedType.push(id)
    }
  }
}
</script>

<style lang="less">
  #publish{
    .editor{
      width: 900px;
      margin: 15px auto;
      top: 50px;
      .title{
        width: 100%;
        height: 36px;
        padding: 5px 10px;
        outline: none;
        margin-bottom: 10px;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 3px;
        &:focus{
          border-color: #1888de;
          box-shadow: 0 0 5px #1888de;
        }
      }
      .active{
        border-color: #1888de;
        box-shadow: 0 0 5px #1888de;
      }
      .barFixed .toolbar{
        position: fixed;
        top: 52px;
        width: 898px;
      }
      .dashboard-font > div:nth-child(2){
        display: none;
      }
      .icon{
        font-size: 1rem;
      }
      .class{
        margin-bottom: 10px;
        padding: 5px 0px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        border-radius: 3px;
        transition: all .3s linear;
        &.warning{
          animation: blink .5s ease-in 0s 3;
        }
        span{
          padding: 1px 5px;
          color: #20A0FF;
          border-radius: 3px;
          background-color: #fff;
          margin-right: 10px;
          font-size: .9rem;
          box-shadow: 0 0 5px #999;
          transition: all .3s linear;
          cursor: pointer;
          &.active{
            background-color: #20A0FF;
            color: #fff;
          }
        }
      }
      .publish-btn{
        font-size: 1rem;
        display: block;
        margin: 15px auto;
        padding: 5px 100px;
      }
    }
  }
  @keyframes blink {
    0%{
      background-color: transparent;
    }
    50%{
      background-color: #20A0FF;
    }
    100%{
      background-color: transparent;
    }
  }
</style>
