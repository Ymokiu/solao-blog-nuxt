<template>
  <div id="app">
    <TheHeader />
    <MainBg />
    <nuxt />
    <el-backtop :visibility-height="800"></el-backtop>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader/TheHeader";
import MainBg from "@/components/MainBg"

export default {
  components: {
    TheHeader,
    MainBg
  }
};
</script>

<style>
html {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 87.5%;
  color: #3a4953;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-weight: 400;
  font-stretch: normal;
  line-height: 1.5;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  background-color: #f8f8f8;
  box-sizing: border-box;
}


</style>
