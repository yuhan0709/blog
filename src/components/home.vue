<template>
  <transition name="fade">  
    <div @click="toEssey">
      <img src="../assets/images/homepage.png" class="background" >
      <P class="left_title">MISS</P>
      <P class="right_title">yang's</P>
    </div>
  </transition>
  </template>
<script>
import $ from "jquery"
export default {
  name:'home',
  mounted:function(){
      setTimeout(() => {
      $('.left_title').animate({"top":"200px"},2000);
      $('.right_title').animate({"bottom":"40px"},2000);
      },500);
    },
  methods:{
    toEssey:function(){
      this.$router.push({path:'/essey'});
    }
  }
  }

</script>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
  .background{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left: 0;
  }
  p {
    color:#ffffff;
    font-family: 'Segoe Script';
    font-size: 40px;
    letter-spacing: 30px;
    word-spacing:500px;
    -webkit-box-reflect: below 1px 
    -webkit-gradient(linear, 0 0, 0 100%, from(transparent), color-stop(.1, transparent), to(rgba(3,3,3,.2)));
  }
  .left_title {
    position: absolute;
    top:-200px;
    left: 120px;
    color:#000000;
  }
  .right_title {
    position: absolute;
    bottom:-200px;
    right: 0px;
  }
</style>

