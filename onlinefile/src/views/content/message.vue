<template>
  <div>
    <div class="demo-image">
      <div  align="center" class="block" v-for="fit in fits" :key="fit">
        <el-image
                style="width: 1000px; height: 300px"
                :src="url"
                :fit="fit"></el-image>
      </div>
    </div>
    <div id="showmsg" align="center">
      <el-table
              :data="tableData"
              stripe
              style="width: 100%">
        <el-table-column
                prop="id"
                label="公告号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="email"
                label="来源">
        </el-table-column>
        <el-table-column
                prop="message"
                label="信息">
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
    import {netShowMsg} from "../../network/optfile";

    export default {
        name: "message",
        data() {
            return {
                tableData: [],
                fits: ['fill'],
                url: require('@/assets/img/timg.gif'),
            }
        },
        created() {
            console.log('组件被创建');
            netShowMsg().then(res => {
                console.log(res.data.data)
                this.tableData = res.data.data
            })
        },
    }
</script>

<style scoped>

  #showmsg{
    margin: 20px auto;
    width: 1000px;
  }


</style>