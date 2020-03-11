<template>
  <div id="SellWell">
    <div class="categoryHotSell">
    <h2>类目热销榜</h2>
    <ul class="clearFix">
      <li v-for="(item,index) in datas" :key="index" class="item">
        <a :href="item.targetUrl" :class="{tab:index<=1}">
        <p :class="{line:index<=1}">{{item.categoryName}}</p>
        <img :src="item.picUrl" class="img"/>
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
.SellWell{
  width: 100%;
}
.categoryHotSell {
  padding: 0 15px 15px;
  background-color: #fff;
  margin-top: 10px;
}
.categoryHotSell h3 {
  padding: 15px;
}
.categoryHotSell .item {
  width: 24%;
  float: left;
  background-color: #f5f5f5;
  margin-bottom: 4px;
}
.categoryHotSell .item .tab {
  display: flex;
  justify-content: space-between;
}
.categoryHotSell .item p {
  font-size: 12px;
  text-align: center;
  margin: 5px 0 0 0;
}
.categoryHotSell .item:nth-child(2n+1) {
  margin-right: 4px;
}
.categoryHotSell .item:nth-child(1),
.categoryHotSell .item:nth-child(2) {
  width: 49%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.categoryHotSell .item:nth-child(1) .line,
.categoryHotSell .item:nth-child(2) .line {
  margin: 30px 0 0 15px;
  font-weight: 400;
  font-size: 14px;
}
.categoryHotSell .item:nth-child(1) .line::before,
.categoryHotSell .item:nth-child(2) .line::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 55px;
  width: 30px;
  height: 2px;
  background: #333;
}
.categoryHotSell .item:nth-child(1) img,
.categoryHotSell .item:nth-child(2) img {
  height: 100%;
  width: 50%;
}
.categoryHotSell .item:nth-child(4),
.categoryHotSell .item:nth-child(8) {
  margin-right: 4px;
}
.categoryHotSell .item img {
  display: block;
  margin: 0 auto;
  width: 60px;
  height: 60px;
}


</style>
