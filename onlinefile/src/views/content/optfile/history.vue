<template>
  <div>
    <div id="histui">
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
    import {netHistoryFile} from "../../../network/optfile";

    export default {
        name: "history",
        data() {
            return {
                tableData: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }]
            }
        },
        methods: {

        },
        created() {
            console.log('组件被创建');
            let obj ={};
            obj.oid= this.$store.getters.curOptUser.oid
            netHistoryFile(obj).then(res => {
                console.log(res.data.data)
                this.tableData = res.data.data
            })
        },
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

  #histui{
    margin: 10px;
  }

</style>