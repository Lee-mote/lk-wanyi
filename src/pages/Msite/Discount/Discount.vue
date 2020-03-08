<template>
  <div id="Discount">
    <div class="bigPromotionModule" v-if="bigPromotion.length">
      <div class="top">
        <img :src="bigPromotion[0].cells[0].picUrl" />
      </div>
      <div class="middle">
        <img :src="bigPromotion[1].cells[0].picUrl" />
        <img :src="bigPromotion[1].cells[1].picUrl" />
      </div>
      <div class="bottom">
        <ul>
          <li>
            <span>{{bigPromotion[2].cells[0].title}}</span>
            <span>{{bigPromotion[2].cells[0].subTitle}}</span>
            <img :src="bigPromotion[2].cells[0].itemList[0].picUrl" />
          </li>
          <li>
            <span>{{bigPromotion[2].cells[1].title}}</span>
            <span>{{bigPromotion[2].cells[1].subTitle}}</span>
            <img :src="bigPromotion[2].cells[1].itemList[0].picUrl" />
          </li>
          <li>
            <span>{{bigPromotion[2].cells[2].title}}</span>
            <span>{{bigPromotion[2].cells[2].subTitle}}</span>
            <img :src="bigPromotion[2].cells[2].itemList[0].picUrl" />
          </li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script>
import indexDatas from '../../../../datas/index.json'

export default {
   name: 'Discount',
  data () {
    return {
      bigPromotion: [],
    }
  },
  mounted () {
    this.bigPromotion = indexDatas.bigPromotionModule.floorList
    
  }
}
</script>

<style>
.Discount{
  width:100%;
  height: 100%;
}
.bigPromotionModule{
  background-color:rgb(212, 50, 59);
  width:100%;
}
.top{
  width:100%;
}
.top img{ 
  width:100%;
  height:100px;
  }
.middle{
    width:100%;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
  }
.middle img{
  width :47%;
  margin :0 2px;
  }
.bottom{
  width:100%;
  }
.bottom ul{
  display:flex;
  justify-content:space-between;
  padding:0 10px 10px;
  }
.bottom ul li{
  width:115px;
  height:110px;
  display:flex;
  flex-direction:column;
  align-items:center;
  border-radius:5px;
  margin-top:5px;
  padding-top:10px;
  background:url('https://yanxuan.nosdn.127.net/00ce570b5344d3ab52e98427df5aaf3c.png') center center;
  }
.bottom ul li img{
  width:70px;
  height:70px;
  }
.bottom ul li span {
  font-size:13px;
  color: #ab0933;
  }
 .bottom ul li span :nth-child(1){
 font-weight:bold;
        }
           
          
</style>
