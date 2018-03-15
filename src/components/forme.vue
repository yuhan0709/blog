<template>
    <div class="content">
        <div class="information">
            <my-information></my-information>
        </div>
        <div class="chart"> 
            <skill-chart></skill-chart>
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
.content{
    display: -moz-flex;display: -o-flex;display: -ms-flex;display: flex;
    flex-flow:row wrap;
    justify-content:flex-start;
    height: 100%;
}
// *{
//     margin:0;
//     padding: 0;
// }
// .content{
//     margin-left:220px;
//     .forme{
//         width: 1000px;
//         height: 100%;
//         margin: 0 auto;
//     .myInformation{
//         width: 30%;
//         height: 100%;
//         float: left;
//         .information{
//             width: 400px;
//             margin:0 auto;
//         }
//     }
//     .chart{
//         width: 50%;
//         float: left;
//     }
//     .clear{
//         clear: both;
//     }
//     }
// }


</style>
