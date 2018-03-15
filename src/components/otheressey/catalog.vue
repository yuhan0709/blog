<template>
    <ul>
        <div v-for='items in catalog' :key="items.index">
            <li @click="showEssey"><a href="javascript:void(0)">{{items}}</a>
            </li>
        </div>
    </ul>
</template>
<script>
import axios from 'axios'
export default {
    name:"esseyCatalog",
    data() {
        return{
            catalog:[],
        }
    },
    async mounted(){
        axios.get('/otherEsseyCatalog').then((response)=>{
            for(var i=0;i<response.data.length;i++){
                this.catalog.push(response.data[i]);
            }
        })
        .catch(function(err){
            console.log(err);
        })
    },
    methods:{
        showEssey:function(event){
              var title=event.target.innerHTML;
              this.$emit('title',title);
        }
    }
}
</script>
<style lang="less" scoped>
    a{
        color:inherit;
    }
    ul{
        margin-top: 40px;
    }
    ul li{
        list-style: none;
        padding-bottom:15px;
        padding-right: 10px;
        padding-left: 0px;
        font-size: 13px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        letter-spacing: 1px;      
    }
</style>
