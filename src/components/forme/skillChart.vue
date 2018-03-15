<template>
<div class="skillchart">
  <p>我的技能</p>
  <div id="chart">
  </div>
</div>
</template>
<script>
import HighCharts from "highcharts";
export default {
  name:'skillChart',
  data(){
      return{
          container:'chart'
      }
  },
  mounted(){
var options = {
    chart: {
        type: 'bar',
        inverted: false,
        backgroundColor: 'rgba(0,0,0,0)'

    },
    title: {
        text: ' '
    },
    subtitle: {
        text: ' '
    },
    xAxis: {
        categories:['html','css','js','es6','node','vue','webpack','gulp','less'],
        reversed: false,
        title: {
            enabled: true,
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value+'';
            }
        },
        maxPadding: 0.05,
        showLastLabel: true
    },
    yAxis: {

        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value+'%';
            }
        },
        lineWidth: 2
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        spline: {
            marker: {
                enable: false
            }
        },
         column: {
            pointWidth:4//设置柱状图宽度
        }
    },
    tooltip: {
        pointFormatter: function() {
            // return '<span style="color: '+ this.series.color + '">\u25CF</span> '+
            //     this.series.name+': <b>'+ this.y +'</b><br/>.'
            return '<span>'+this.y+'%'+'</span>'
            }
    },
    series: [{
        name: '掌握',
        data:  [90,80,80,40,40,50,30,20,60]
    }]
};
    HighCharts.chart(this.container, options);
  }
}
</script>
<style lang="less" scoped>
    .skillchart{
        // margin-left: 60px;
        margin-left: 20px;
        margin-top: -45px;
    }
    p {
      font-size: 20px;
      font-family: "微软雅黑";
      font-weight: bolder;
      padding-bottom: 5px;
      padding-left: 8px;
      width: 100px;
      border-bottom: 4px solid #000000;
      margin-top: 80px;
    }
    #chart{
        width: 550px;
        height: 400px;
    }
</style>



