<template>
  <div>
    <Header />
    <Nav />
    <Swiper />
    <Promise />
    <Spirit />
    <Discount />
    <Vip />
    <SellWell />

  </div>
</template>

<script>
import Header from './Header/Header'
import Nav from './Nav/Nav'
import Swiper from './Swiper/Swiper/Swiper'
import Promise from './Promise/Promise'
import Spirit from './Spirit/Spirit'
import Discount from './Discount/Discount'
import Vip from './Vip/Vip'
import SellWell from './SellWell/SellWell'




export default {
  name: 'Home',
  components: {
    Header,
    Nav,
    Swiper,
    Promise,
    Spirit,
    Discount,
    Vip,
    SellWell
  }
}
</script>

<style lang='stylus' scoped></style>
