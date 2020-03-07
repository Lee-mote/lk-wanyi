<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" @click="goto('/msite')">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" @click="goto('/sort')">分类</van-tabbar-item>
      <van-tabbar-item icon="cash-on-deliver" @click="goto('/worth')">值得买</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" @click="goto('/shop')">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="goto('/order')">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
  data () {
    return {
      active:0
    }
  },
  methods: {
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang='stylus' scoped></style>
