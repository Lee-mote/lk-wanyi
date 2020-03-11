<template>
  <div id="Spirit">
        <van-grid column-num="5" >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
<span class="text">新品发布</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png" >
<span class="text">居家生活</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan-item.nosdn.127.net/4fd0fbbf570e78d069606ca8f67f4a44.png" >
<span class="text">服饰鞋包</span>
  </van-grid-item >
    <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png" >
<span class="text">美食酒水</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan-item.nosdn.127.net/6d683c4ca12f8e3bb70cd1de83fe29a9.png" >
<span class="text" >个护清洁</span>
  </van-grid-item >
</van-grid>
<van-grid column-num="5" >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan-item.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png" >
<span class="text">母婴亲子</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan-item.nosdn.127.net/a9d6de39ab17ab82d5424205dafc4136.png" >
<span class="text">运动旅行</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png" >
<span class="text">数码家电</span>
  </van-grid-item >
    <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan-item.nosdn.127.net/e1d87f845a5773665bd7042d28cbf11a.png" >
<span class="text">全球特色</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif" >
<span class="text" >好货抄底</span>
  </van-grid-item >
</van-grid>
  </div>
</template>
<script>
import Vue from 'vue';
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
export default {
  name: 'Spirit',
  components: {
  }

}
</script>

<style>
.spirit-demo{
  width: 50px;
  height: 80px;
}
.img{
  display: block;
  width: 100%;
  height: 100%;
}
.text{
  width: 100%;
  margin-left: 10px;  
}
</style>
