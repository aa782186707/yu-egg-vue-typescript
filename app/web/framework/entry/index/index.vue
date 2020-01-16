<template>
  <router-view v-if="$route.meta.noLayout"></router-view>
  <Layout v-else>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </Layout>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="less">
@import url("../../../asset/css/reset.less");
@import "../../../asset/theme-chalk/lib/index.less";
</style>
