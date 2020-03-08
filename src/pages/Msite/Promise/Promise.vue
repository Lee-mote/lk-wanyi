<template>
<div id="promise">
 <ul class="promise_con">
      <li>
        <van-icon name="medal-o" size="15px" />
        <span class="text">网易自营品牌</span>
      </li>
      <li>
        <van-icon name="bookmark-o" size="15px" />
        <span class="text">30天无忧退货</span>
      </li>
      <li>
        <van-icon name="cash-back-record" size="15px" />
        <span class="text">48小时快速退款</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Promise',
  components: {
  }
}
</script>

<style>
.promise{
  width: 100%;
  height: 50px;
  display: flex;
 
}
.promise_con{
  display :flex;
  justify-content:center;
  align-items:center; 
  width:100%;
  height:36px;
}
.promise_con li{
  margin-right:10px;
}
.text{
  font-size:12px;
  margin-left:10px;
  vertical-align:middle;
}
.van-icon{
 color:#CD3333;
 vertical-align:middle;
}
</style>
