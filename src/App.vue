<template>
  <div class="warp">
    <router-view />
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from './components/FooterNav'
export default {
  name: 'App',
  components: {
    FooterNav,
  }
}
</script>

<style lang='stylus'>
html, body
  width 100%
  height 100%
  margin 0
</style>
