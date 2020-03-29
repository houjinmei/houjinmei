<template>
  <div class="user"><!--最大的div-->
   
      <div class="myself"><!--个人中心-->
        <router-link to="/">
          <img src="../../public/img/back2.png">
        </router-link>
        <span>个人中心</span>
      </div>
                    <div class="user-login">
                        <router-link to="/register">注册</router-link>
                        <span>|</span>
                        <router-link to="/login">登录</router-link>
                    </div>
            
                      <div class="number">
                        <span>我的订单</span>
                        <em>全部订单</em>
                      </div>
                <div class="server"><!--服务内容-->
                    <ul>
                      <li>
                        <p class="iconfont icon-zhanghu2"></p>
                        <p>待付款</p>
                      </li>
                      <li>
                        <p class="iconfont icon-daichengtuan1"></p>
                        <p>待成团</p>
                      </li>
                      <li>
                        <p class="iconfont icon-shouhuo_icon_n"></p>
                        <p>待收货</p>
                      </li>
                      <li>
                        <p class="iconfont icon-tuikuancopy1"></p>
                        <p>退款/售后</p>
                      </li>

                    </ul>
                </div>
            <div class="acontent"><!--卷皮中心-->
              <a class="mar">我的优惠券</a>
              <a>我的收藏</a>
              <a>我的拼团</a>
              <a>我的免单券<span>0张</span></a>
              <a >借钱<span>新用户免费领1000元</span></a>
              <a class="mar">客服中心</a>
              <a>关于卷皮</a>
            </div>
          <div class="footers">
           <router-link to="/">返回首页</router-link> 
            <a>客户端</a>
            <a>电脑版</a>
          </div>
  </div>
</template>
<style scoped>
*{
  font-size: 16px;
}
.user{height:100%;width: 100%;overflow-y: auto;background: #eee;}
.myself{/*个人中心*/
  width: 100%;
  height:0.88rem ;
  background: red;
  text-align: center;
  line-height: 0.88rem;
  font-size: 0.35rem;
  color: #fff;
}
.myself a{margin-left: 0.3rem;float: left;color: #fff;font-size:0.5rem;}
.myself span{margin-right:0.7rem; font-size:0.4rem;}
.myself a img{
  width: 0.5rem;
  height: 0.5rem;
  color: #fff;
  padding-top:0.2rem;
}
.user-login{/*注册和登录*/
  width: 100%;
  height: 2.4rem;
  /* text-align: center; */
  line-height: 2.8rem;
  background: red;
}
.user-login a{
  font-size: 0.4rem;
  color: #fff;
  }
.user-login a:first-child{
    margin-left: 1.5rem;
  }
.user-login span{
  font-size: 0.4rem;
  margin: 0  0.61rem;
  color: #fff;
  }
  .number{/*关于订单*/
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #eee;
    background: #fff;
  }
  .number span{margin-left:0.4rem;}
  .number em{
    float: right;
    margin-right:0.4rem;
    font-style: normal;
    color: #999;
    font-size: 0.3rem;
  }
  .server{width: 100%;height: 1.20rem;background: #fff;}/*服务内容*/
  .server ul{
    display: flex;
    justify-content: space-around;
    text-align: center;
    line-height: 0.55rem;
    border-bottom: 0.02rem solid #eee;
  }
  .server ul li .iconfont{
    margin-top:0.1rem;
    font-size:0.4rem;
  }
  .server ul li p{
    color: #666;
    font-size: 0.2rem;
  }
  .acontent a{/*卷皮中心*/
   display: block;
   width: 100%;
   height: 0.9rem;
   border-bottom: 1px solid #eee;
   color: #333;
   line-height: 0.9rem;
   padding-left: 0.4rem;
   background: #fff;
   font-size: 0.3rem;
  }
  .acontent span{
    float: right;
    margin-right:0.8rem; 
    color:#999;
    font-size: 0.3rem;
  }
  .mar{margin-top: 0.2rem;}
  .footers{
    display: flex;/*页脚*/
    justify-content: space-around;
    background: #fff;
    margin-top: 0.2rem;
    height: 0.8rem;
    margin-bottom: 1rem;
  }
  .footers a{color: #666; font-size:0.2rem; line-height: 0.8rem}
  
</style>
