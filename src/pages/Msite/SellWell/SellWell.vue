<template>
  <div id="SellWell">
    <div class="categoryHotSell">
    <h2>类目热销榜</h2>
    <ul class="clearFix">
      <li v-for="(item,index) in datas" :key="index" class="item">
        <a :href="item.targetUrl" :class="{tab:index<=1}">
        <p :class="{line:index<=1}">{{item.categoryName}}</p>
        <img :src="item.picUrl" />
        </a>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
import indexDatas from '../../../../datas/index.json'

export default {
  name: 'SellWell',
  components: {
  },
  data () {
    return {
      datas: []
    }
  },
  mounted () {
    this.datas = indexDatas.categoryHotSellModule.categoryList
  }
}
</script>

<style lang='stylus' scoped>

</style>
