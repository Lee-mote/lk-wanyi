<template>
  <div id="nav">
 <van-tabs>
   <van-tab v-for="(item,index) in titles" :title="titles[index]" :key="index" class="tab" >
<van-icon name="arrow-down" class="icon" />

   </van-tab>
</van-tabs>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      titles: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色']
    }
  },
}
</script>

<style lang='stylus' scoped>
.nav{
  position relative;
}
  .icon{
  position absolute;
    right:0;
    top:0;
    background-color:#fff;
    height:44px;
    width:44px;
    line-height:44px;
    font-size:20px;
    text-align:center;
  }
</style>
