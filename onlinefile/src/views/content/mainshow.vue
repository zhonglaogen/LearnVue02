<template>
  <div id="mainui">
    <div id="zou_ma_deng">
      <el-carousel :interval="4000" type="card" height="300px" >
        <el-carousel-item v-for="item in imgurl" :key="item">
          <!--        <h3 class="medium">{{ item }}</h3>-->
          <img :src="item" alt="" class="showimg">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div align="center">
      <el-row>

        <el-button type="primary" @click="goNewFile" round>快速开始</el-button>

      </el-row>
    </div>


  </div>
</template>

<script>
    import {netInsertFile} from "../../network/optfile";
    import qs from 'qs'

    export default {
        name: "mainshow",
        data(){
            return {
                imgurl: [
                    require('@/assets/img/1.jpg'),
                    require('@/assets/img/2.jpg'),
                    require('@/assets/img/3.jpg'),
                    require('@/assets/img/4.jpg'),
                    require('@/assets/img/5.jpg'),
                    require('@/assets/img/6.jpg'),
                ],
                value1: null,
                value2: null,
                value3: null,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }' }
            }
        },
        methods: {
            goNewFile(){
                this.$router.replace('/home/managefile')
            }
        }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;

  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #zou_ma_deng{
    margin: 50px auto;
    width: 1000px;
  }
  .showimg {
    width: auto;
    height: 300px;
  }
</style>