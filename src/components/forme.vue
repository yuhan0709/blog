<template>
    <div class="forme">
            <div class="myInformation">
                <div class="information">
                    <my-information></my-information>
                </div>
            </div>
            <div class="skillChart"> 
                <div class="chart"> 
                    <skill-chart></skill-chart>
                </div>
            </div>
            <div class="clear">
            </div>
    </div>
</template>
<script>
import myInformation from '@/components/forme/information'
import skillChart from '@/components/forme/skillChart'
export default {
    name:'forme',
    components:{
        myInformation,
        skillChart
    }
}
</script>
<style lang="less" scoped>
    // .forme{
    //     width: 100%;
    //     height: 100%;
    //     // background-color:#D3D3D3;
    //     padding-top: 45px;
    // .container{
    //     width:80%;
    //     margin:0 auto;
    // .myInformation{
    //     float: left;
    // }
    // .skillChart{
    //     float: right;
    // }
    // }
    // }
*{
    margin:0;
    padding: 0;
}
    .forme{
        width: 100%;
        height: 100%;
        // background-color: aqua;
    .myInformation{
        width: 30%;
        height: 100%;
        float: left;
        .information{
            width: 400px;
            margin:0 auto;
        }
    }
    .skillChart{
        width: 70%;
        height: 100%;
        float: right;
        .chart{
            width: 500px;
            margin-top: -50px;
            margin-left: 0px;
        }
    }
    .clear{
        clear: both;
    }
}
</style>
