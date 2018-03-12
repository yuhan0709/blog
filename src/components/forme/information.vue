<template>
    <div class="forme">
        <p>我的信息</p>
        <table class="table table-striped">
            <tbody>
            <tr>
                <td>photo:</td>
                <td><img src="../../assets/images/myphoto.jpg"></td>
            </tr>
            <tr>
                <td>name:</td>
                <td>杨小涵</td>
            </tr>
             <tr>
                <td>birthday:</td>
                <td>1999.07.09</td>
            </tr>
            <tr>
                <td>university:</td>
                <td>cqupt(重庆邮电大学)</td>
            </tr>
            <tr>
                <td>workplace:</td>
                <td>Geek网工作室</td>
            </tr>
             <tr>
                <td>major:</td>
                <td>信息管理与信息系统</td>
            </tr>
             <tr>
                <td>QQ:</td>
                <td>853654529</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  name: "forme"
};
</script>
<style lang="less" scoped>
    .forme{
        margin-left: 20px;
    }
    p {
      font-size: 20px;
      font-family: "微软雅黑";
      font-weight: bolder;
      padding-bottom: 5px;
      padding-left: 8px;
      width: 100px;
      border-bottom: 4px solid #000000;
      margin-top: 30px;
    }
    table {
      width: 30%;
      border-collapse: collapse;
      tr:nth-child(odd){
          background-color: #F9F9F9;
      }
      td {
        padding-left: 20px;
        font-size: 13px;
        font-family: "隶书";
        height: 30px;

        img {
          width: 200px;
        }
      }
    }
</style>

