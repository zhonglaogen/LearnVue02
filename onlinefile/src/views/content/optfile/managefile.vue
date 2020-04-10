<template>
  <div >
    <div id="new_file_title">

      <el-button type="primary" :loading="true">正在填写档案...</el-button>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="writeLocation" status="exception"></el-progress>
    </div>
    <div id="father">
      <div id="newfile">
        <el-form ref="form" :model="form"   label-width="80px">
          <el-form-item label="档案标题">
<!--            $event.target.value-->
            <el-input v-model="form.title" @input="changLocation(form.title,0)"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.name" @input="changLocation(form.name,1)"></el-input>
          </el-form-item>
          <el-form-item label="身份证">
            <el-input v-model="form.idcard" @input="changLocation(form.idcard,2)"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email" @input="changLocation(form.email,3)"></el-input>
          </el-form-item>
          <el-form-item label="档案类型">
            <el-select v-model="form.region" @input="changLocation(form.region,4)" placeholder="请选择活动区域">
              <el-option label="工作经历" value="工作经历"></el-option>
              <el-option label="成长经历" value="成长经历"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="建档时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期"  @input="changLocation(form.date1,5)" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间"  @input="changLocation(form.date2,6)" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="建档通知">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="档案来源">
            <el-checkbox-group v-model="form.type"  @input="changLocation(form.type,7)">
              <el-checkbox label="纸质资料" name="type"></el-checkbox>
              <el-checkbox label="电子文档" name="type"></el-checkbox>
              <el-checkbox label="亲友访问" name="type"></el-checkbox>
              <el-checkbox label="现实接触" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="填写环境">
            <el-radio-group  @input="changLocation(form.resource,8)" v-model="form.resource">
              <el-radio label="本人协同填写档案"></el-radio>
              <el-radio label="本人不在场"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="档案内容">
            <el-input type="textarea" autosize v-model="form.desc" @input="changLocation(form.desc,9)"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>

  </div>
</template>

<script>
    import {netInsertFile} from "../../../network/optfile";

    export default {
        name: "manageile",
        data() {
            return {
                writeLocation: 0,
                flag: [],
                form: {
                    title: '',
                    name: '',
                    idcard:'',
                    email: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                if (this.$store.getters.curOptUser==''){
                    this.$router.replace('/login');
                    return
                }

                if (this.writeLocation < 100){
                    this.open({
                        msg: '缺少未填项,请查看填写进度',
                        type: '建档失败'
                    })
                    return;
                }

                let messageFile = {}
                let obj = {}
                messageFile.title = this.form.title
                messageFile.uname = this.form.name
                obj.idCard = this.form.idcard
                obj.email = this.form.email
                messageFile.region = this.form.region


                messageFile.fdate = this.form.date1.toLocaleDateString()
                messageFile.ftime = this.form.date2.toLocaleTimeString()

                if (this.form.delivery){
                    messageFile.addvise = "已通知"
                }else {
                    messageFile.addvise = "未通知"
                }
                let types = ''
                for(let i = 0; i<this.form.type.length; i++){
                  types = types + this.form.type[i] + ' '
                }
                messageFile.types = types
                messageFile.enviroment = this.form.resource
                messageFile.descri = this.form.desc

                messageFile.oid= this.$store.getters.curOptUser.oid
                messageFile.oname=this.$store.getters.curOptUser.name

                obj.messageFile = messageFile

                netInsertFile(obj).then(res => {
                    if (res.data.code == 0){
                       this.open({
                           msg:'档案已经上传',
                           type: '建档成功'
                       })
                    }else {
                        this.open({
                            msg:res.data.msg,
                            type: '建档失败'
                        })
                    }
                }).catch(res => {
                    this.open({
                        msg: '服务器忙',
                        type: '建档失败'
                    })
                })



            },

            open(msg) {
                this.$alert(msg.msg, msg.type, {
                    confirmButtonText: '继续',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: msg.msg
                        });
                    }
                });
            },

            changLocation(title,index){
                if (title != '' && !this.flag[index]){
                    this.writeLocation += 10
                    this.flag[index] = true
                }else if (title == ''){
                    this.flag[index] = false
                    this.writeLocation -= 10
                }

            }
        }
    }
</script>

<style scoped>
  #newfile{
    width: 600px;
    margin:0 auto 0 auto;
  }

  #new_file_title{
    color: #409EFF;
    font-size: 30px;
    position: relative;
    margin: 20px;
  }


</style>