<template>
    <div class="content">
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
*{
    margin:0;
    padding: 0;
    overflow-x: hidden;
}
.content{
    margin-left:220px;
    .forme{
        width: 1100px;
        height: 100%;
        margin: 0 auto;
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
        margin-top: -50px;
        margin-left: 30px;
        .chart{
            width: 600px;
        }
    }
    .clear{
        clear: both;
    }
    }
}

</style>
