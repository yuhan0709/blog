<template>
<div class="econtainer">
  <div class="myessey">
    <div class="esseyCatalog">
        <div class="catalog">
            <essey-catalog @title="getTitle"></essey-catalog>
        </div>
    </div>
    <div class="esseyContent">
        <div class="essey">
            <essey-content :getTitle="getResponse"></essey-content>
        </div>
    </div>
    <div class="clear">
    </div>
  </div>
</div>
</template>
<script>
import esseyCatalog from '@/components/essey/catalog'
import esseyContent from '@/components/essey/aessey'
export default {
    name:"essey",
    data(){
        return{
            getResponse:""
        }
        
    },
    components:{
        esseyCatalog,
        esseyContent
    },
    methods:{
        getTitle:function(data){
            if(data){
                this.getResponse = data;
            }
        }
    }
}
</script>
<style lang="less" scoped>
*{
    margin:0;
    padding: 0;
    // overflow-x: hidden;
}
    .econtainer{
        width:100%;
        height: 100%;
        // background-color: aqua;
    .esseyCatalog{
        width: 18%;
        height: 100%;
        position:fixed;
        padding-top: 40px;
        overflow-y: scroll;
        overflow-x: hidden;
       .catalog{
           width: 220px;
           height: 800px;
           margin:0 auto;
            
        }
    }
    .esseyContent{
        width: 80%;
        float: right;
        height:100%;
        .essey{
            width: 900px;
            margin:0 auto;
            margin-top:40px;
        }
        }
    .clear{
        clear: both;
    }
    }
</style>
