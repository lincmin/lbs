<style>

</style>

<template>
  <div>
    <ul>
      <li v-for="cafe in cafes">{{ cafe.name }}</li>
    </ul>
    <span v-show="cafesLoadStatus == 1">加载中...</span>
    <span v-show="cafesLoadStatus == 2">数据加载成功！</span>
    <span v-show="cafesLoadStatus == 3">数据加载失败！</span>
  </div>
</template>

<script>
export default {
  create() {
    this.$store.dispatch('loadCafes');
  },
  computed: {
    //获取cafes加载状态
    cafesLoadStatus() {
      return this.$store.getters.getCafesLoadStatus;
    },
    //获取cafes
    cafes() {
      return this.$store.getters.getCafes;
    }
  }
}
</script>