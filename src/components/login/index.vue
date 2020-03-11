<template>
  <div class="loginContainer" :style="{backgroundColor: loginMethod ? '#fff' : '#eee'}">
    <Header/>
    <!-- 手机登录 -->
    <PhoneLogin  v-if="loginMethod === 1"/>
    <!-- 用户名等登录 -->
    <UserLogin v-if="loginMethod === 2" />
    <!-- 登录选项页 -->
    <LoginTab v-if="loginMethod === 0" />
  </div>
</template>

<script>
// 头部插槽
import Header from '../header'
// 登录首页
import LoginTab from './loginTab'
// 手机号登录组件
import PhoneLogin from './phoneLogin'
// 用户名等登录组件
import UserLogin from './userLogin'
export default {
  name: 'Login',
  components: {
    Header,
    LoginTab,
    PhoneLogin,
    UserLogin
  },
  data () {
    return {
      loginMethod: 0,
    }
  },
  mounted () {
    this.$bus.$on('isShowLoginTab', this.isShowLoginTab)
  },
  methods: {
    // 切换登录选项
    isShowLoginTab (num) {
      // 切换登录选项
      this.loginMethod = num
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.loginContainer
  width 100%
  padding 50px 0 0
  height 667.33px
  overflow hidden
  box-sizing border-box
  position relative
  .headerLogin
    width 75px
    height 24px
    margin-left 50px
</style>
