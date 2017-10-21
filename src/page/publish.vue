<template lang="jade">
  #publish
    .editor
      input.title.shadow-box(placeholder="标题")
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
      content: 'ASDDSFAS',
      contentFocus: false,
      barFixed: false
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
      this.content = content;
    },
    publish () {

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
      .publish-btn{
        font-size: 1rem;
        display: block;
        margin: 15px auto;
        padding: 5px 100px;
      }
    }
  }
</style>
