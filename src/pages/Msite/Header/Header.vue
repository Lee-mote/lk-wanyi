<template>
  <div class="header-container">
    <div class="line" >
      <router-link to="/"  class="logo"></router-link>
      <van-search placeholder="搜索商品，共23688款好物"  input-align="center"/>
      <van-button plain type="danger" to="/order" size="mini" class="signin">登录</van-button>
    </div>
    <v-indexTabs :tabs="tabs"></v-indexTabs>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
}
</script>

<style lang='stylus'>
.header-container{
  background-color: #fff;
}
.line {
    display: flex;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    padding: .21333rem .4rem;
    width: 100%;
}
.line .logo {
    width: 1.84rem;
    height: .53333rem;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
    display: inline-block;
    margin-right: .26667rem;
    background-size: cover;
    background-position: center;
}


</style>
