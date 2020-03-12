<template>
    <div class="wrap">
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
    <div class="userLogin">
      <img src="../images/bj.png" class="wy" />
      <div class="btn">
        <input
          type="text"
          placeholder="请输入邮箱账号 / 用户名"
          class="userInput"
          v-model="name"
          name="name"
          maxlength="18"
          v-validate="'required|changePhone'"
        />
        <input
          type="password"
          placeholder="请输入密码"
          class="userInput"
          name="pwd"
          maxlength="18"
          v-model="pwd"
          v-validate="'required'"
        />
        <van-button type="default" color="#DD1A17" size="large" @click="userLogin">登录</van-button>
      </div>
      <div class="loginTab" @click="goto('/userLogin')">
        <span >其他的登录方式</span>
        <van-icon name="arrow" size="16px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data () {
    return {
      name: '',
      pwd: ''
    }
  },
  methods: {
     goto(path){
      this.$router.replace(path)
    },
    userLogin () {
      const { name, pwd } = this
      console.log(name, pwd);
    }
   
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap  
  width 100%
  height 100%
    .hwrapper
      width 100%
      height 40px
      background-color #f90
      padding 8px 15px
      position fixed
      left 0
      top 0
      z-index 100
      .center
        width 100%
        text-align center
        img 
          width 40%
          margin-left 80px
  .userLogin
    width 335px
    margin 0 auto
  .wy
    width 150px
    height 55px
    margin 120px 200px 70px 100px
  .btn
    position relative
    .userInput
      width 100%
      height 30px
      margin 7px 0
      font-size 14px
      padding 0 10px
      box-sizing border-box
      border-bottom 0.1px solid #ccc
    .van-button
      .van-button__text
        font-size 16px
  .loginTab
    width 120px
    height 20px
    display flex
    justify-content center
    margin 20px auto 0
    span
      font-size 14px
      padding-right 5px
      line-height 16px
      color #555
</style>
