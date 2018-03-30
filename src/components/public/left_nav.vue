<template>
  <div class="left_nav">
    <ul>
      <li v-for="(item,index) in leftList" @click="toRouter(item.linkRouter)" @mouseout="test(index)" :class="{'hoverClass':hoverIndex==index}">
        <i class="iconfont" :class="item.className"></i>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        isHoverClass:false,
        hoverIndex:-1,
        leftList: [
          {className:'icon-icon',linkRouter:'/discussion',name:'论坛'},
          {className:'icon-shangwuzhantubiaoku__jishutuandui',linkRouter:'/society',name:'社团管理'},
          {className:'icon-yuangongliebiao',linkRouter:'/member',name:'成员管理'}, {className:'icon-cailiaozhengli',linkRouter:'/materials',name:'物质管理'},{className:'icon-huodong',linkRouter:'/activity',name:'活动管理'},{className:'icon-shangwutubiao-',linkRouter:'/news',name:'新闻管理'},
        ],
      }
    },
    watch: {},
    methods: {
      goback(){
        window.history.go(-1);
      },
      toRouter(myRouter){
        this.$router.push({path: myRouter})
      },
      test(index){
        this.hoverIndex = index;
      }
    },

    mounted() {

    }
  }
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .left_nav {
    width: 90px;
    height: 100%;
    background-color: #233445
    border-radius :0 0 8px 8px ;
    display: inline-block;
    ul {
      padding-top: 20px
      width: 100%
      height: 100%
      box-sizing border-box
      display: flex
      justify-content center
      align-items center
      flex-wrap wrap
      li {
        text-align: center;
        box-sizing border-box
        width: 100%;
        height: 98px;
        padding: 6px 0
        cursor :pointer
        color: #fff
        i {
          font-size: 28px
        }
        p {
          font-size: 12px
          margin-top: 4px
        }
      }

    }
      .hoverClass{
        color #13c4a5
      }
  }
</style>
