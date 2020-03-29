<template>
    <div class="reister">
        <header >
            <router-link to="/home/user">
               <i class="iconfont icon-fanhui"></i>
            </router-link>
            <span>注册</span>
        </header>
        <p>请确保你的手机畅通，用于接收短信验证码短信</p>
        <form action="" name="">
                <input type="text" placeholder="请输入手机号"><br/>
                <input type="password" placeholder="请输入短信验证码">
               
                   <input type="button" value="下一步" id="btn">
               
                 
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.reister{width: 100%;height: 100%;overflow: hidden;}
header{
    width: 100%;
    height: 0.88rem;
    text-align: center;
    border-bottom: 1px solid #eee;
    line-height: 0.88rem;
    font-size:0.4rem;
}
header a{
    float: left;
    margin-left: 0.4rem;

}
header span{
    margin-right:0.5rem;
}
.reister p{
    text-align: center;
    color: #999;
    font-size:0.25rem;
    margin:0.4rem 0;
}
.reister form input {
    width: 100%;
    height: 1rem;
    border: none;
    padding-left:0.4rem; 
    font-size: 0.3rem;
}

#btn{
    width: 95%;
   display: inline-block;
    margin:0 auto;
    text-align: center;
    height: 1rem;
   margin-left: 0.2rem;
   margin-top: 0.2rem;
   border-radius: 0.1rem;
   color:#fff;
}
</style>
