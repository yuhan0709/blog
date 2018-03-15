<template>
<div class="aessey">
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
    axios.get('/otherEssey/es6函数参数默认值').then((Response)=>{
       this.aessey = Response.data;
    })
    .catch((err)=>{
      console.log(err);
    })
  },
  watch:{
    getTitle:function(newVal,oldVal){
      axios.get('/otherEssey/'+newVal).then((Response)=>{
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
  .content{
     margin-top: 20px;
     width: 700px;
     text-indent: 25px;
     font-size: 13px;
     font-family: Georgia, 'Times New Roman', Times, serif;
     letter-spacing: 1px;
 }

</style>
