<template> 
<div>
<div class="container">
    <img class="headphoto" src="./assets/images/headphoto.jpg">
    <ul class="nav">
        <li>
            <img src="./assets/images/home.png"> 
            <a href ="/#/home">主页</a>
        </li>
        <li>
            <img src="./assets/images/essey.png"> 
            <a href="/#/essey">思考</a>
        </li>
        <li>
            <img src="./assets/images/daily.png"> 
            <a href="/#/otheressey">杂记</a>
        </li>
        <li>
            <img src="./assets/images/forme.png"> 
            <a href="/#/forme">关于我</a>
        </li>
        <li>
            <img src="./assets/images/leavemessage.png"> 
            <a href="/leavemessage">留言</a>
        </li>
        <li>
            <a href="javascript:(0)"><img src="./assets/images/zan.png"></a>1
        </li>
    </ul>
</div>
<router-view class="other"></router-view>
</div>
</template>  
<script>
import $ from 'jquery'
export default {
    watch:{
      $route(){
        if(this.$route.path=="/home"){
            $('.container').css('left','-180px');
        }else{
            $('.container').css('left','0px');
        }
      }
   },
   mounted(){
       if(this.$route.path=="/home"){
            $('.container').css('left','-180px');
        }else{
            $('.container').css('left','0px');
        }
   }
}
</script>
<style lang="less" scoped>
a{
    color:inherit;
    text-decoration: none;
}
.container{
    height:100%;
    width:180px;
    background-color:#ffffff;
    position: fixed;
    top:0;
    left:0px;
    z-index: 10;
}
.headphoto{
    width: 80px;
    height: 80px;
    margin-left: 25%;
    margin-top: 20px;
    border:1px solid aliceblue;
    border-radius: 40px;
}
ul{ 
        padding-left: 0px;
        margin-top:60px;
        width: 180px;
    li{
        list-style: none;
        height: 70px;
        width: 150px;
        padding-left: 30px;
        font-size: 13px;
        img{
            width: 25px;
            height: 25px;
            margin-right: 20px;
            margin-top: 20px;
        }
    }
    li:hover{
        background-color:#cccccc;
    }
}
.other{
    margin-left: 200px;
}
</style>


