<template>
  <div class="home">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data () {
      return {
          imgList:[
              { imgUrl:require('../assets/img/home1.jpg')},
              { imgUrl:require('../assets/img/home2.jpg')},
             { imgUrl:require('../assets/img/home3.jpg')},
             { imgUrl:require('../assets/img/home4.jpg')},
            { imgUrl:require('../assets/img/home5.jpg')},
              ]
      }
    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .home {
    overflow: hidden
    width: 100%
    height: 100%
    box-sizing: border-box;
    padding-top: 10px;
    .el-carousel__item h3 {
      color: #fff;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: pink;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: skyblue;
    }
    .el-carousel__item {
     img{
       width: 100%
       height: 100%
     }
    }
  }
</style>
