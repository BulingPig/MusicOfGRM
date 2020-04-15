<template>
  <div class="continar">
    <el-container>
      <el-header>
        <el-row style="lineHeight:60px">
          <el-col :span="2">
            <i class="el-icon-microphone" style="fontSize:18px;color:#fff" />
          </el-col>
          <el-col :span="19">
            <el-input
              v-model="searchMsg"
              clearable
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              @focus="searchFocus"
              @blur="searchBlur"
            />
          </el-col>
          <el-col :span="3">123</el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="main">1</div>
        <div v-if="searchFlag" class="search">
          <el-row>
            <el-col v-for="(item,index) in searchHotList" :key="index" style="height:50px" :span="12">
              <el-row>
                <el-col :span="2">
                  <div :id="[index<4?'hot':'not_hot']" class="lf">{{ index +1 }}</div>
                </el-col>
                <el-col :span="22">
                  <div class="top">{{ item.searchWord }}</div>
                  <div class="bot">{{ item.content }}</div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import { searchHot } from '@/api/musicInfo'
export default {
  data() {
    return {
      searchMsg: '',
      searchHotList: [],
      searchFlag: false
    }
  },
  mounted() {
    searchHot().then(res => {
      this.searchHotList = res.data
    })
  },
  methods: {
    searchFocus() {
      this.searchFlag = true
    },
    searchBlur() {
      this.searchFlag = false
    }
  }
}
</script>

<style lang="less">

.continar{
  .el-input__inner {
      border-radius:20px;
    }
  .el-header, .el-footer {
      background-color: #151515;
      color: #333;
      text-align: center;
      padding: 0;
    }
  .el-main {
    background-color: #151515;
    color: #333;
    text-align: center;
  }
  .search{
    #hot{
      color:#E74346
    }
    #not_hot{
      color: #686868;
    }
    .lf{
      line-height: 32px;
      font-size: 16px;
    }
    .top{
      text-align: left;
      padding-left: 5px;
      margin-bottom: 5px;
      color: #fff;
    }
    .bot{
      text-align: left;
      padding-left: 5px;
      font-size: 10px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      color: #636363;
    }
  }
}

</style>
