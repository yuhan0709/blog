<template>
<div class="econtainer">
  <div class="myessey">
    <div class="esseyCatalog">
        <div class="catalog">
            <essey-catalog @title="getTitle"></essey-catalog>
        </div>
    </div>
    <div class="essey">
        <essey-content :getTitle="getResponse"></essey-content>
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
}
.econtainer{
    margin-left: 220px;
    height: 100%;
    .myessey{
        width: 1000px;
        height: 100%;
        margin:0 auto
    }
    .esseyCatalog{
        width: 15%;
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
    .essey{
        width:600px;
        margin-left: 250px;
        margin-top:40px;
    }
    .clear{
        clear: both;
    }
}
</style>

