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
    <div class="PhoneLogin">
      <img src="../images/bj.png" class="wy" />
      <div class="btn">
        <input
          type="text"
          placeholder="请输入手机号"
          class="phoneInput"
          v-model="phone"
          name="phone"
          maxlength="11"
          v-validate="'required|changePhone'"
        />
        <input type="text" placeholder="请输入短信验证码" class="phoneInput" v-model="code" name="code" maxlength="8" v-validate="'required'" />
        <div class="code">
          <van-button
            plain
            hairline
            type="info"
            color="#666"
            @click="getCode"
            size="mini"
          >{{computedTime ? '已发送 '+computedTime+ ' 秒' : '获取验证码'}}</van-button>
        </div>
        <van-button type="default" color="#DD1A17" size="large" @click="phoneLogin">登录</van-button>
      </div>
      <div class="loginTab" @click="$bus.$emit('isShowLoginTab',0)">
        <span @click="goto('/loginTab')">其他的登录方式</span>
        <van-icon name="arrow" size="16px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneLogin',
  data () {
    return {
      phone: '',
      computedTime: 0, 
      code: ''
    }
  },
  methods: {
    getCode () {
      this.computedTime = 5
      this.timeId = setInterval(() => {
        this.computedTime--
        if (this.computedTime <= 0) {
          this.computedTime = 0
          clearInterval(this.timeId)
        }
      }, 1000)
    },
    async phoneLogin () {
      const names = ['phone', 'code']
      const success = await this.$validator.validateAll(names)
      if(success){
        // 发送请求

        // 拿到响应的数据 存储在vuex中和localStorage中
        
      
      }
      
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
      padding 8px 15px
      position fixed
      left 0
      top 0
      z-index 100
      background-color #f90
      .center
        width 100%
        text-align center
        img 
          width 40%
          margin-left 80px
  .PhoneLogin
    width 335px
    margin 0 auto
  .wy
    width 135px
    height 45px
    margin 120px 200px 70px 100px
  .btn
    position relative
    .phoneInput
      width 100%
      height 30px
      margin 15px 0
      font-size 14px
      padding 0 10px
      box-sizing border-box
      border-bottom 0.1px solid #ccc
    .code
      position absolute
      top 3px
      right 8px
      .van-button
        .van-button__text
          font-size 12px
          padding 0 5px
    .van-button
      margin-top 20px
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
