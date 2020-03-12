<template>
  <div class="loginContainer" :style="{backgroundColor: loginMethod ? '#fff' : '#eee'}">
    <Header/>
    <PhoneLogin  v-if="loginMethod === 1"/>
    <UserLogin v-if="loginMethod === 2" />
    <LoginTab v-if="loginMethod === 0" />
  </div>
</template>

<script>
import Header from '../header'
import LoginTab from './loginTab'
import PhoneLogin from './phoneLogin'
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
    isShowLoginTab (num) {
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
