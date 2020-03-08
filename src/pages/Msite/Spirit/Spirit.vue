<template>
  <div id="Spirit">
        <van-grid column-num="5" >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
<span class="text">新品发布</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
<span class="text">新品发布</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
<span class="text">新品发布</span>
  </van-grid-item >
    <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
<span class="text">新品发布</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
<span class="text" >新品发布</span>
  </van-grid-item >
</van-grid>
<van-grid column-num="5" >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
<span class="text">新品发布</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
<span class="text">新品发布</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
<span class="text">新品发布</span>
  </van-grid-item >
    <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
<span class="text">新品发布</span>
  </van-grid-item >
  <van-grid-item  class="spirit-demo">
<img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" >
<span class="text" >新品发布</span>
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
