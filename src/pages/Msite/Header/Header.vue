<template>
  <div class="header-container">
    <div class="line" >
      <router-link to="/"  class="logo"></router-link>
      <router-link to="/search" class="m-topSearchIpt ipt" >
          <i class="icon" ></i>
          <span class="placeholder" >
            <span >商品搜索, 共</span> <span >24027</span> <span >款好物</span>
          </span>
      </router-link>
          <span class="signin">登录</span>

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

.ipt {
    width: 52%;
}
.m-topSearchIpt {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: .74667rem;
    font-size: .37333rem;
    background-color: #ededed;
    border-radius: .10667rem;
    text-decoration: none;
}
.m-topSearchIpt .icon {
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: .13333rem;
}
.m-topSearchIpt .icon {
    display: inline-block;
    width: .37333rem;
    height: .37333rem;
}
.m-topSearchIpt .placeholder {
    color: #666;
    text-decoration: none;
}
.signin{
  color: red;
  font-size: .36755rem;
  border: 1px solid red;
  border-radius: 5px;
  margin-left: .96667rem;
}
</style>
