<template>
  <div class="discussion">
    <ul class="dis_box">
      <li>
        <el-input
          type="textarea"
          resize="none"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture">
          <el-button size="small" type="primary">上传图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
       <div class="send_btn">
         <span  @click="open2">发帖</span>
       </div>
      </li>
      <!--本人发的可以删除-->
      <!--不是本人发的不可以删除-->
      <li>
        <div class="dis_user flex_box">
          <img src="../../assets/img/home1.jpg" alt="">
          <div>
            <span>小仙女</span>
            <span class="span_mar_top">昨天 12:00</span>
          </div>
        </div>
        <span>评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论</span>
        <div class="dis_img"><img src="../../assets/img/bg2.jpg" alt=""></div>
        <div class="edit_btn">
          <i class="iconfont icon-dianzan orange"></i>
          <i class="iconfont icon-pinglun orange"></i>
          <i class="iconfont icon-zhuanfa orange"></i>
          <i class="iconfont icon-shanchu orange"></i>
        </div>
        <div class="dis_detail flex_box">
          <img src="../../assets/img/bg2.jpg" alt="">
          <div>
            <span>小可爱：lallalalallalalalallalal</span>
            <span class="span_mar_top">2017.08.11&nbsp;&nbsp;&nbsp;12:00
            <i class="iconfont icon-pinglun orange"></i>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data () {
      return {
        textarea: '',
        fileList2: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
          {name: 'bg.jpeg', url: require('../../assets/img/home1.jpg')}
        ],
        dianzanIndex:-1,
        disList:[
            {
          master:'小仙女',
          masterPic:require('../../assets/img/home1.jpg'),
          time:'昨天 12:00',
          speech:'评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论',
          canDel:false,
          like:true,
          visitor:[{name:'小可爱}],',toAnswer:'小仙女',visitorPic:require('../../assets/img/bg2.jpg'),visitor:'lallalalallalalalallalal',year:'2017.08.11',time:'12:00'
        },{name:'小可爱}],',toAnswer:'小仙女',visitorPic:require('../../assets/img/bg2.jpg'),visitor:'lallalalallalalalallalal',year:'2017.08.11',time:'12:00'
          },{name:'小可爱}],',toAnswer:'小仙女',visitorPic:require('../../assets/img/bg2.jpg'),visitor:'lallalalallalalalallalal',year:'2017.08.11',time:'12:00'
          }],
      },
          {
            master:'小仙女',
            masterPic:require('../../assets/img/home1.jpg'),
            time:'昨天 12:00',
            speech:'评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论',
            canDel:false,
            like:false,
          },
        ]
    }
    },
    mounted(){

    },
    methods: {
        /*
        * 上传文件方法
        * */
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      /*
       * 上传文件方法
       * */
      handlePreview(file) {
        console.log(file);
      },
      /*成功提醒信息*/
      open2() {
        this.$message({
          message: '恭喜你，发帖成功',
          type: 'success'
        });
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .discussion {
    box-sizing border-box;
    font-size: 18px;
    color: #666;
    .dis_box {
      margin-left: 90px;
      box-sizing border-box;

      li {
        width: 1024px
        background: #fff;
        padding: 20px;
        margin-top: 20px;
        border-radius 8px;
        font-size: 16px;
      }
    }
    .dis_user {
      margin-bottom: 10px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      div {
        margin-left: 10px;
        display: inline-block;
      }
      span {
        font-size: 14px;
        display: block;
      }
    }
    .dis_img {
      margin: 10px 0;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .edit_btn {
      text-align: right
      i {
        margin-left: 20px;
        font-size: 20px;

      }
      .icon-dianzan {
        font-size: 24px;
      }
      .icon-shanchu {
        font-size: 22px;
      }

    }
    .dis_detail {
      margin-top: 20px;
      border-top: 1px solid #ccc;
      padding: 10px;
      div {
        display: inline-block;
        font-size: 16px;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius 50%;
        margin-right: 6px;
      }
      span {
        font-size: 14px;
        display: block;
      }
      .icon-pinglun {
        font-size: 16px;
      }
    }
    .send_btn {
      height: 40px
      span{
        display: inline-block;
        padding: 10px 20px;
        background-color: #13ce66;
        color: #fff;
        border-radius 8px;
        float:right;
        cursor:pointer;
      }
        span:hover{
          background-color: #13ce66;
          opacity:0.6;
        }
    }
  }
</style>
