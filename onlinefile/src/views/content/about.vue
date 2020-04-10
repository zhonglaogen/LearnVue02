<template>
  <div>
    <div align="center" class="demo-image__preview">
      <el-image
              style="width: 1000px; height: 600px"
              :src="url"
              :preview-src-list="srcList">
      </el-image>
      <div id="entry">
        <el-row>
          <el-button type="danger" @click="tojob" round>点击进入</el-button>
        </el-row>
      </div>

    </div>

  </div>

</template>

<script>
    export default {
        name: "about",
        data() {
            return {
                url: require('@/assets/img/jobhome.png'),
                srcList: [
                    require('@/assets/img/jobhome.png'),
                    require('@/assets/img/bosshome.png'),
                    require('@/assets/img/showhome.png'),
                    require('@/assets/img/userhome.png'),
                    require('@/assets/img/chat.png'),
                    require('@/assets/img/showfile.png'),

                ],
                urls: [
                    require('@/assets/img/1.jpg'),
                    require('@/assets/img/1.jpg'),
                    require('@/assets/img/1.jpg'),
                    require('@/assets/img/1.jpg'),
                    require('@/assets/img/1.jpg')

                ]
            }
        },
        methods: {
            tojob(){
                window.open("http://101.200.220.160:8080")
            }
        }

    }
</script>

<style scoped>

  #entry {
    margin: 50px;
  }


</style>