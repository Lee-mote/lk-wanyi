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
    <Limited />
    <New/>
    <FooterOther/>
    <Footer/>
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
import Limited from './Limited/Limited'
import New from './New/New'
import FooterOther from './FooterOther/FooterOther'
import Footer from './Footer/Footer'


export default {
  name: 'Msite',
  components: {
    Header,
    Nav,
    Swiper,
    Promise,
    Spirit,
    Discount,
    Vip,
    SellWell,
    Limited,
    New,
    FooterOther,
    Footer
  }
}
</script>

<style lang='stylus' scoped></style>
