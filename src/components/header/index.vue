<template>
  <div class="hwrapper">
      <van-icon name="wap-home-o" size="26px" @click="$router.replace('/msite')" />
    <div class="center">
      <img src="http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="">
    </div>
    <div class="right" >
      <van-icon name="shopping-cart-o" size="26px" @click="$router.replace('/shop')" />
      <van-icon name="search" size="26px" @click="$router.replace('/worth')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 头部
.hwrapper
  display flex
  width 100%
  height 40px
  padding 8px 15px
  position fixed
  left 0
  top 0
  z-index 100
  background-color #fff
  .center
    width 100%
    text-align center
    img 
      width 40%
      margin-left 80px
  .right
    .van-icon
      float right
     
      
</style>
