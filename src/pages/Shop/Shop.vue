<template>
  <div class="Shop">
    <div class="header">
      <div class="cartHeader">
        <a href="#">领劵</a>
        <div class="cart">购物车</div>
      </div>
      <ul class="servicePolicy">
        <li>
          <van-icon name="circle" size="1px" />
          <span>30天无忧退货</span>
        </li>
        <li>
          <van-icon name="circle" size="1px" />
          <span>48小时快速退款</span>
        </li>
        <li>
          <van-icon name="circle" size="1px" />
          <span>满88元免包邮</span>
        </li>
      </ul>
    </div>
    <div class="defaultPage">
      <div class="container">
        <img src="./image/cart.png" alt="购物车" />
        <p>去添加点什么吧</p>
        <van-button type="default" color="#DD1A21" size="large">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop"
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.Shop
  width 100%
  height 667px
  background-color #F4F4F4
  overflow hidden
  .header
    width 100%
    position fixed
    top 0
    left 0
    z-index 10
    .cartHeader
      width 100%
      height 44px
      padding 0 20px
      background-color #fff
      .cart
        font-size 18px
        line-height 44px
      a
        float right
        font-size 16px
        color #FF0000
        margin 14px 10px 0 0
    .servicePolicy
      display flex
      justify-content space-between
      align-items center
      width 100%
      height 60px
      padding 0 12px
      background-color #eee
      li
        width 150px
        margin-left 2px
        display flex
        margin 3px 2px 2px
        justify-content center
        align-items center
        span
          font-size 12px
          color #666
          padding-left 3px
          white-space nowrap
  .defaultPage
    position relative
    width 100%
    height 100%
    .container
      position absolute
      left 0
      top 280px
      right 0
      width 240px
      margin 0 auto
      img
        width 124px
        height 124px
        margin-left 58px
        margin-bottom -10px
      p
        font-size 16px
        color #c1c1c1
        text-align center
        margin-bottom 20px
      .van-button__text
        font-size 16px
</style>