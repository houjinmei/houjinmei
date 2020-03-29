<template>
  <div class="home">
    <router-view></router-view>
    <ul class="footer">
      <router-link to="/home/homeindex" active-class="selected" tag="li">
        <span class="iconfont icon-shouye "></span>
        <p>首页</p>
      </router-link>
      <router-link to="/home/kind" active-class="selected" tag="li">
        <span class="iconfont icon-fenlei1" ></span>
        <p>分类</p>
      </router-link>
      <router-link to="/home/cart1" active-class="selected" tag="li">
        <span class="iconfont icon-gouwuche "></span>
        <p>购物车</p>
      </router-link>
      <router-link to="/home/user" active-class="selected" tag="li">
        <span class="iconfont icon-04"></span>
        <p>我的卷皮</p>
      </router-link>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
@import '../../public/font/iconfont.css';
@import '../assets/css/reset.css';
.footer{
  width: 100%;
  display: flex;
  position:fixed;
  align-items: center;
  justify-content: space-around;
  bottom:0;
  left: 0;
  right:0;
  height: 1rem;
  border-top:1px solid #eee;
  background: #fff;
  li{
    text-align: center;
    display: flex;
    flex-direction: column;
    color: rgb(180, 180, 180);
    .iconfont{
      font-size:0.4rem;
      // padding-top:0.1rem;
    }
    p{
      // padding-top:0.1rem;
      color:#333;
    }
  }
  .selected{
    color:#ff464e;
  }
}
</style>