<template>
  <div id="regisUi">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item
                prop="email"
                label="邮箱"
                :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
        >
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>

      </el-form>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input
                placeholder="请输入手机号码"
                v-model="phone"
                clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="申请机构">
        <el-input
                placeholder="请输入申请机构"
                v-model="organ"
                clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="申请理由">
        <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入申请理由"
                v-model="reason">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm,dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  import {netRegist} from '../../network/user.js'

    export default {
        name: "regist",
        data() {

            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                organ:'',
                reason: '',
                phone: '',
                dynamicValidateForm: {
                    domains: [{
                        value: ''
                    }],
                    email: ''
                },
                ruleForm: {
                    pass: '',
                    checkPass: '',
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let user = {}
                        user.email = this.dynamicValidateForm.email;
                        user.password = this.ruleForm.pass;
                        user.phone = this.phone;
                        user.name = this.organ;
                        user.reason = this.reason;
                        console.log(user);
                        netRegist(user).then(res => {
                           let  obj = res.data;
                            if (obj.code == 0){
                                // alert("注册成功")
                                this.open({
                                    res: '注册成功',
                                    msg: '请登录系统'
                                })
                                this.$router.push('/login')
                            }else {
                                this.open(
                                    {
                                        res: '注册失败',
                                        msg: obj.msg
                                    }
                                )
                                // alert(obj.msg)
                            }

                        })



                    } else {
                        console.log('error submit!!');
                        alert('密码不一致');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.ruleForm.pass = '';
                this.ruleForm.checkPass = '';
                this.phone = '';
                this.organ = '';
                this.reason = '';
                this.dynamicValidateForm.email='';
            },
            open(msg) {
                this.$notify({
                    title: msg.res,
                    message: msg.msg,
                    duration: 0
                });
            }
        }

    }
</script>

<style scoped>

</style>