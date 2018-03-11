<template>
<div class="aessey">
  <!-- <p class="title">{{aessey.title}}</p>
  <p class="message">
    <img src="../../assets/images/esseyTime.png">{{aessey.time}}
    <img src="../../assets/images/esseyauthor.png">{{aessey.author}}
    <img src="../../assets/images/esseywatch.png">{{aessey.watch}}
    <img src="../../assets/images/esseynote.png">{{aessey.notes}}
  </p> -->
  <p class="content" v-html="aessey" v-highlight>
  </p>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name:"esseyContent",
  data(){
    return{
      aessey:{}
    }
  },
  props:['getTitle'],
  async mounted(){
    axios.get('/essey/DOM').then((Response)=>{
       this.aessey = Response.data;
    })
    .catch((err)=>{
      console.log(err);
    })
  },
  watch:{
    getTitle:function(newVal,oldVal){
      axios.get('/essey/'+newVal).then((Response)=>{
        this.aessey = Response.data;
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .aessey{
    margin-top: 20px;
  }
  .title{
    font-size:18px;
    font-weight: bolder;
    // text-align: center;
  }
  .content{
     margin-top: 20px;
     width: 700px;
     text-indent: 25px;
     font-size: 13px;
     font-family: Georgia, 'Times New Roman', Times, serif;
     letter-spacing: 1px;
 }
 .message{
   font-size: 10px;
   word-spacing: 15px;
   color:#747778;
   margin-top: 12px;
   img {
     width: 15px;
     height: 15px;
   }
 }
</style>
