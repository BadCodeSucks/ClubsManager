<template>
  <div id="app">
    <!--<div class="bgc"></div>-->
    <my-header></my-header>
    <left-nav v-show="isShow" class="my_left_nav"></left-nav>
    <router-view class="my_router" />
  </div>
</template>

<script>
    import myHeader from './components/public/header'
    import leftNav from './components/public/left_nav'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        name: 'app',
        computed: {
          ...mapGetters({
            isShow: 'showNav'
          })
        },
        components: {
            'my-header': myHeader,
            'left-nav': leftNav,
        },
        data() {
            return {
            }
        },
        mounted:function(){
        },
        methods: {
          ...mapMutations([
            'SET_SHOW_NAV',
          ]),
        },
        watch:{
         /* '$route': function () {
            console.log('刷新');
            console.log(this.$route);
          }*/
          $route(){
              if(this.$route.path=='/home'||this.$route.path=='/'){
                this.SET_SHOW_NAV(false);
              }else {
                this.SET_SHOW_NAV(true);
              }
            console.log(1);
            console.log(this.$route.fullPath);
          }
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow hidden;
  box-sizing border-box;
  background: rgba(33,33,33,0.1);
  padding-bottom: 50px;
  .my_router,.my_left_nav{
    float :left;
  }
}
</style>
