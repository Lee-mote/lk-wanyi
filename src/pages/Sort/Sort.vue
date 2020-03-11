<template>
  <div class="Sort"> 
    <div class="head">
   <van-search placeholder="搜索商品，共23688款好物"  input-align="center"/>
   <Category/>
    </div>
    <div class="content">
      <van-sidebar v-model="activeKey" class="slide">
        <van-sidebar-item
          :title="item.name"
          class="slide_item"
          v-for="(item,index) in slides"
          :key="index"
          @click="onChange(item.id)"
        />
      </van-sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Category from './Category/Category'
import datas from '../../../datas/ft1Data.json'

export default {
  name: 'Sort',
  data () {
    return {
      activeKey: 0,
      slides: []
    }
  },
  components: {
    Category
  },
  methods: {
    onChange (id) {
      this.$router.replace('/sort/' + id)
    }
  },
  mounted () {
    this.slides = datas.categoryL1List
    
  }
}
</script>

<style lang='stylus' scoped>
.Sort
  width 100%
  height 100vh
  overflow hidden
  .head
    width 100%
    padding 10px 15px
  .content
    display flex
    .slide
      width 100px
      .slide_item
        height 40px
        display flex
        align-items center
</style>
