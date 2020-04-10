<template>
  <div>
    <div id="find_ui" align="center">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="邮箱">
          <el-input v-model="formInline.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码">
          <el-input v-model="formInline.idCard" placeholder="身份证号码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div id="allfile">
      <el-table
              :data="tableData"
              style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="档案标题:">
                <span>{{ props.row.title }}</span>
              </el-form-item>
              <el-form-item label="姓名:">
                <span>{{ props.row.uname }}</span>
              </el-form-item>
              <el-form-item label="档案ID:">
                <span>{{ props.row.fid }}</span>
              </el-form-item>
              <el-form-item label="建档人:">
                <span>{{ props.row.oname }}</span>
              </el-form-item>
              <el-form-item label="是否通知:">
                <span>{{ props.row.addvise }}</span>
              </el-form-item>
              <el-form-item label="档案类型:">
                <span>{{ props.row.region }}</span>
              </el-form-item>
              <el-form-item label="建档日期:">
                <span>{{ props.row.fdate }}</span>
              </el-form-item>
              <el-form-item label="建档时间:">
                <span>{{ props.row.ftime }}</span>
              </el-form-item>
              <el-form-item label="档案来源:">
                <span>{{ props.row.types }}</span>
              </el-form-item>
              <el-form-item label="填写环境:">
                <span>{{ props.row.enviroment }}</span>
              </el-form-item>
              <el-form-item label="档案内容:">
                <span>{{ props.row.descri }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
                label="档案 ID"
                prop="fid">
        </el-table-column>
        <el-table-column
                label="档案标题"
                prop="title">
        </el-table-column>
        <el-table-column
                label="姓名"
                prop="uname">
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
    import {netFindFile} from "../../../network/optfile";

    export default {
        name: "findfile",
        data() {
            return {
                formInline: {
                    email: '',
                    idCard: ''
                },
                tableData: []
            }

        },
        methods: {
            onSubmit() {
                if (this.$store.getters.curOptUser==''){
                    this.$router.replace('/login')
                    return
                }
                let obj = {}
                obj.email = this.formInline.email;
                obj.idCard = this.formInline.idCard
                console.log(obj)
                // obj.id = 1
                // obj.name = '2'
                netFindFile(obj).then(res => {
                    console.log(res)
                    this.tableData = res.data.data
                })
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  #find_ui{
    margin: 20px;
  }
</style>