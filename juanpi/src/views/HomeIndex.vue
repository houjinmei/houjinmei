<template>
  <div class="homeindex">
    <Header />
    <Swiper />
    <div class="sc-iRbamj">
      <img src="../../public/img/zhfq.png">
      <img src="../../public/img/xsms.png">
      <img src="../../public/img/pptm.png">
      <img src="../../public/img/xsms.png">
    </div>
    <div class="content">
      <img src="../../public/img/con1.gif">
      <img src="../../public/img/con2.png">
      <img src="../../public/img/con3.png">
    </div>
    <div class="content1">
      <img src="../../public/img/con4.gif">
      <img src="../../public/img/con5.png">
    </div>
      <Nav />
    
  </div>
 
</template>
<script>
import Header from './Header'
import Swiper from './Swiper'
import Nav from './Nav'
export default{
  components:{
    Header,
    Swiper,
    Nav
  }
}
</script>
<style lang="scss" scoped>
.homeindex{
  width: 100%;
  height: 100%;
  margin-bottom:1rem;
  overflow-y: scroll;
}
.sc-iRbamj{
  width: 100%;
  height: 1.67rem;
  float: left;
  overflow:hidden;
  img{
    width: 1.87rem;
    height: 1.67rem;
  }
}
.content{
  width: 100%;
  height: 4rem;
  float: left;
  margin-bottom: 0.6rem;
  img:nth-child(1){
    width: 3.75rem;
    height: 4.6rem;
    float: left;
  }
  img:nth-child(2){
    width: 3.75rem;
  }
  img:nth-child(3){
    width: 3.75rem;
  }
}
.content1{
  width: 100%;
  height: 4.13rem;
  float: left;
  img{
    width: 100%;
  }
  img:nth-child(2){
    border-top: 0.2rem solid #eee;
    border-bottom: 0.2rem solid #eee;
  }
}
</style>
