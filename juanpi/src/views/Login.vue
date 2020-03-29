<template>
  <div class="login">
    <header>
      <router-link to="/home/user">
          <img src="../../public/img/back2.png">
      </router-link>
      
      <span>登录</span>
      <router-link to="/register">注册</router-link>
    </header>
      <div id="box">
        <div class="in-method">
                <span  @click="showStyle" :class="{'active': flag }">卷皮账号登录</span>
                <span  @click="showStyle" :class="{'active': !flag }">手机验证登录</span>
            </div>
            <div class="txt">
                <div class="acco">
                    <input type="text" :placeholder="hint[hintIndex].txt" v-model="acco" @input="stateChange">
                    <!-- <mt-button class="butn"  size="normal" >获取验证码</mt-button> -->
                    <span class="yzm" v-show="!flag" :disabled="!flag&&state">获取验证码</span>
                </div>
                <div class="acco"><input type="password" :placeholder="hint[hintIndex].pass" v-model="pass"></div>
            </div>
            <div class="in">
                <mt-button size="large" type="default" @click="signin" :disabled="!flag&&state">登录</mt-button>
            </div>
            <div class="pas">
              <span>
                <input type="checkbox" checked>两周之内免登录
              </span>
              <a>
                忘记密码？
              </a>
            </div>
            <p>第三方快捷登录</p>
      </div>
      <div class="third">
        <i class="iconfont icon-qq " ></i>
        <i class="iconfont icon-taobao"></i>
        <i class="iconfont icon-xinlang "></i>
      </div>
      <div class="serve">
        <span><i class="iconfont icon-daishouhuo"></i>全场包邮</span>
        <span><i class="iconfont icon-search"></i>100%人工复检</span>
        <span><i class="iconfont icon-dingyue1"></i>7天放心</span>
      </div>
  </div>
</template>
<script>

export default {
    data(){
        return{
            flag: true,
            prev: null,
            hint: [
                {
                    txt: '账户名/手机号/Email',
                    pass: '请输入您的密码'
                },
                {
                    txt: '请输入手机号',
                    pass: '请输入短信验证码'
                }
            ],
            hintIndex: 0,
            acco: null,
            pass: null,
            state: true
        }
    },
    methods: {
        showStyle(e){
            if(this.prev === e.currentTarget) return;
            this.acco = null;
            this.pass = null;
            this.prev = e.currentTarget;
            this.flag = !this.flag;
            if(this.flag){
                this.hintIndex = 0;
            }else{
                this.hintIndex = 1;
            }
        },
        // 使用手机登录还是账号登录
        stateChange(){
            // 手机登录时.
            if(!this.flag){
                if(!(/^[1][0-9]{10}$/g.test(this.acco))){
                    this.state = true;
                    return;
                }else{
                    this.state = false;
                }
            }
        },
        // 登录，将账号信息发送给服务端
        signin(){
            this.$axios.post({
                url: 'http://0.0.0.0:3000',
                params: {
                    acco: this.acco,
                    pass: this.pass,
                }
            })
        },
        signup(){
            this.$router.push('/my/signup')
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../public/font/iconfont.css';
@import './../../public/font1/iconfont.css';

.login{
  width: 100%;
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:10;
  background: #fff;
  header{
    color: #fff;
    height: 0.88rem;
    background:red;
    display: flex;
    justify-content: space-between;
    font-size: 0.3rem;
    line-height: 0.88rem;
    img{
      width: 0.5rem;
      height: 0.5rem;
      margin-top: 0.20rem;
    }
    a{
      color: #fff;
      margin-right:0.1rem;
    }
    span{
      font-size:0.37rem;
    }
  }
}
.in-method{
    width: 100%;
    text-align: center;
}
.in-method span{margin-right:1rem;font-size: 0.3rem;color: #333;display: inline-block;margin-top:0.2rem;}
.in-method span:last-child{margin-right:0}
// .in-method span:first-child{color:#ff464e;}
.in-method span:hover{color: red;border-bottom:1px solid red;padding-bottom: 0.3rem;}
.mint-button{width: 95%;margin: 0 auto; background: #999;color:#fff;}
.acco .yzm{float: right;color:#999;font-size: 0.28rem;margin-right: 0.2rem;margin-top: 0.4rem;}
.txt .acco input:last-child{width:70%;}
.txt .acco input{height:0.88rem;margin-top:0.1rem;margin-left:0.2rem;border:none; width: 95%;margin-bottom:0.4rem;font-size: 0.3rem;}
.pas{width: 100%;height: 1rem;line-height: 1rem;font-size: 0.27rem;color: #999;margin-bottom: 0.3rem;}
.pas a{float:right;margin-right: 0.2rem;}
.pas span{margin-left: 0.2rem;}
p{text-align: center;color: #666;font-size:0.25rem; }
.third{width: 100%;height: 3rem;line-height: 3rem;text-align: center;}
.third i{font-size: 0.7rem;margin:0 0.5rem;color: #ff464e;}
.serve{font-size: 0.2rem;color: #999;display: flex;justify-content: space-around;border-top:1px solid #eee;padding-top: 0.3rem; }
.active{color:#ff464e!important;border-bottom:1px solid red;padding-bottom: 0.3rem;}
</style>