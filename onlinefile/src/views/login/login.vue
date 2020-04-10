<template>
  <div id="loginUi">
    <div class="input_login">
      <el-input
              placeholder="请输入账号"
              v-model="userNumber"
              clearable>
      </el-input>
      <el-input placeholder="请输入密码" v-model="passWord" show-password></el-input>
      <el-row>
        <el-button type="danger" :loading="isLoging" @click="loging">登录</el-button>
        <el-button @click="toRegist">注册</el-button>
      </el-row>
    </div>

  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import {netLogin} from "../../network/user";


    export default {
        name: "login",
        data() {
            return {
                userNumber: '',
                passWord: '',
                isLoging: false
            }
        },
        computed: {
            ...mapGetters([
                'checkLogin'
            ])
        },
        methods: {
            loging(){
                this.$forceUpdate();
                let user = {};
                user.email = this.userNumber;
                user.password = this.passWord;
                console.log("正在登录");
                this.isLoging = !this.isLoging;
                // new Promise((resolve,reject) => {
                //     setTimeout(function () {
                //         console.log('登录失败',user);
                //         resolve()
                //     },1000)
                // }).then(res => {
                //     this.isLoging = !this.isLoging
                // });
                netLogin(user).then( res => {
                    console.log(res.data)
                    let obj =res.data
                    if (obj.code === 0){
                        this.open1({
                            title: '登录成功',
                            msg: obj.msg,
                        })
                        this.$store.dispatch({
                            type: 'userLogin',
                            user: obj.data
                        })
                        this.$router.push('/home');
                    }else {
                        this.open4({
                            title: '登录失败',
                            msg: obj.msg
                        })
                    }
                    this.isLoging = !this.isLoging
                }).catch(res => {
                    this.isLoging = !this.isLoging
                    this.open4({
                        title: '登录失败',
                        msg: '服务器忙'
                    })
                })



            },
            toRegist(){
                this.$store.commit('toRegist');
                this.$router.push('/regist')

            },
            open1(msg) {
                this.$notify({
                    title: msg.title,
                    message: msg.msg,
                    type: 'success'
                });
            },
            open4(msg) {
                this.$notify.error({
                    title: msg.title,
                    message: msg.msg
                });
            }


        }
    }
</script>

<style scoped>


  .input_login >>>.el-input__inner{
    /*两个输入框之间的间距,margin设定元素之间的间隔,上右下左*/
    margin:20px 0px 20px 0px;
  }

  .input_login >>> .el-button{
    /*margin:20px 50px 0px 0px;*/
  }
  .input_login >>> .el-button--danger{
    float: left;
  }

  .input_login >>> .el-button--default{
    float: right;
  }



</style>