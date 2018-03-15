<template> 
<div>
<div class="container">
    <img class="headphoto" src="./assets/images/headphoto.jpg">
    <ul class="nav">
        <router-link to="/home" tag="li">
            <img src="./assets/images/home.png"> 
            <span>主页</span>
        </router-link>
        <router-link to="/essey" tag="li">
            <img src="./assets/images/essey.png"> 
            <span>文章</span>
        </router-link>
        <router-link to="/otheressey" tag="li">
            <img src="./assets/images/daily.png"> 
             <span>杂记</span>
        </router-link>
        <router-link to="/forme" tag="li">
            <img src="./assets/images/forme.png"> 
             <span>关于我</span>
        </router-link>
        <router-link to="leavemessage" tag="li">
            <img src="./assets/images/leavemessage.png"> 
             <span>留言</span>
        </router-link>
        <li>
            <a href="javascript:(0)"><img src="./assets/images/zan.png"></a>1
        </li>
    </ul>
</div>
<router-view class="other"></router-view>
</div>
</template>  
<script>
import $ from "jquery";
export default {
  watch: {
    $route() {
      if (this.$route.path == "/home") {
        $(".container").css("left", "-180px");
      } else {
        $(".container").css("left", "0px");
      }
    }
  },
  mounted() {
    if (this.$route.path == "/home") {
      $(".container").css("left", "-180px");
    } else {
      $(".container").css("left", "0px");
    }
  }
};
</script>
<style lang="less" scoped>
a {
  color: inherit;
  text-decoration: none;
}
.container {
  height: 100%;
  width: 180px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0px;

}
.headphoto {
  width: 80px;
  height: 80px;
  margin-left: 25%;
  margin-top: 20px;
  border: 1px solid aliceblue;
  border-radius: 40px;
}
ul {
  padding-left: 0px;
  margin-top: 60px;
  width: 180px;
  height: 100%;
  display: flex;
  flex-flow:column;
  li {
    list-style: none;
    height:5em;
    width: 150px;
    padding-left: 30px;
    font-size: 13px;
    line-height: 40px;
    font-family: "微软雅黑";
    img {
      width: 22px;
      height: 22px;
      margin-right: 15px;
      margin-top: 20px;
    }
    span{
        padding-top:-10px;
    }
  }
  li:hover {
    background-color: #cccccc;
  }
}
.other {
  margin-left: 200px;
}
.router-link-active {
  background-color: #C1C1C1;
  font-size:15px;
}
</style>


