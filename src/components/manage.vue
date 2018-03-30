<template>
  <div class="manage">
    <div class="bgc_manage"></div>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {

    },
    data () {
      return {

      }
    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .manage{
    overflow:hidden
    width: 100%
    height: 100%
    .bgc_manage{
      position: absolute
      background-image: url(../assets/img/manage.jpg)
      z-index :-10;
    }
  }
</style>
