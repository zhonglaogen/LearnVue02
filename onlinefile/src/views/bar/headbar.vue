<template>
    <div id="tarbar">
      <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">档案管理</template>
          <el-menu-item index="2-1">添加档案</el-menu-item>
          <el-menu-item index="2-2">历史添加</el-menu-item>
          <el-menu-item index="2-3">查询档案</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" :disabled="isShow">公告栏</el-menu-item>
        <el-menu-item index="4">关于我们</el-menu-item>
        <el-menu-item id="usermsg" index="6">{{curName}}</el-menu-item>
      </el-menu>

    </div>
</template>

<script>
    export default {
        name: "headbar",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                isShow: false,
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                switch (key) {
                    case '1':
                        this.$router.replace('/home/mianshow');
                        break;
                    case '2-1':
                        this.$router.replace('/home/managefile');
                        break;
                    case '2-2':
                        this.$router.replace('/home/history');
                        break;
                    case '2-3':
                        this.$router.replace('/home/findfile');
                        break;
                    case '3':
                        this.$router.replace('/home/message');
                        break;
                    case '4':
                        this.$router.replace('/home/about');
                        break;
                    case '6':
                        if (this.curName === '未登录,点击登录'){
                            this.$router.replace('/login');
                        }else {
                            this.$store.commit({
                                type: 'loginout',
                            })
                        }
                        break;

                }
            }
        },
        computed: {
            curName(){
              if (this.$store.getters.curOptUser==''){
                  return '未登录,点击登录'
              }
              return this.$store.getters.curOptUser.name + ',点击退出'
            }
        }
    }
</script>

<style scoped>
  #usermsg {
    float: right;
  }

</style>