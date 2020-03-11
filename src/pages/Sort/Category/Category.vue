<template>
  <div class="Category">
    <div class="banner">
        <a href="https://act.you.163.com/act/pub/FCDFfgPnshwu.html" class="singleBanner">
            <img src="https://yanxuan.nosdn.127.net/6512cf60c8d8b6e67825317cb2b42025.jpg" />
        </a>
        </div>
        <div class="cateList">
      <ul class="list clearFix">
        <li class="cateItem" v-for="(item,index) in datas.categoryList" :key="index">
          <div class="cateWrapper">
            <img :src="item.bannerUrl" class="cateImg" />
            <p class="name">{{item.name}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import datas from '../../../../datas/cateLists.json'

export default {
  name: 'Category',
  data () {
    return {
      datas: {}
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.datas = datas.find((item) => item.id == id)
  },
  watch: {
    '$route' () {
      const id = this.$route.params.id
      this.datas = datas.find((item) => item.id == id)
    }
  }
}
</script>

<style lang='stylus' scoped>
.Category
  width 280px
  float right
  .banner
    margin-left 15px
    padding 7px
    box-sizing border-box
    .singleBanner
      width 100%
      img
        width 100%
        
  .cateList
    width 100%
    padding 0 10px

    .list
      .cateItem
        float left
        width 70px
        height 100px
        margin 0 8px
        .cateWrapper
          display flex
          flex-direction column
          align-items center
          img
            width 70px
            height 70px
          p
            font-size 12px
            text-align center
</style>
