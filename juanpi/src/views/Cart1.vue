<template>
  <div class="cart">
      <div class=shoppNav>
          <span></span>
          <span>购物车</span>
          <span v-if='show' @click='showHidden()'>编辑</span>
          <span v-else @click='showHidden()'>完成</span>
      </div>
      <div class=shopdate>
          <img class="shoppicon" src="//jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png">
          <p>看到喜欢就带回家吧</p>
          <router-link to='/home/homeindex'><div class=reco>今日推荐</div></router-link>
      </div>
  </div>
</template>
<script>
    export default{
   data() {
     return {
       show:true,
     }
   },
      computed:{
  
    },
    methods: {
        showHidden(){
            this.show=!this.show;
        }
    },
    }
</script>
<style lang="scss">
    body{
      background:#f4f4f8;
    }
    .shoppNav{
      line-height:1rem;
      display:flex;
      border-bottom:1px solid #eee;
      background:#fff;
    
    span{
      display:inline-block;
      text-align:center;
    }
    span:nth-child(2n-1){
      font-size:0.3rem;
      width:1rem;  
    }
    span:nth-child(2){
        font-size:0.35rem;
        flex:1;
    }
    }
    .shopdate{
      text-align:center;
      margin:0.52rem 0;
    }
    .shoppicon{
      width:2.8rem;
      height:2.4rem;
    }
    .shopdate p{
      font-size:0.3rem;
      margin:0.28rem;
    }
    .reco{
      width:2.4rem;
      line-height:0.7rem;
      font-size:0.28rem;
      color:red;
      border:1px solid red;
      margin:0 auto;
    }
</style>